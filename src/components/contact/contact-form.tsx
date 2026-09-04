"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { interestOptions } from "@/app/contact/interest-options";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="h-12 w-full rounded-none px-6 text-base font-bold sm:w-auto"
    >
      {pending ? "Sending..." : "Send to Ryan"}
      {!pending && <ArrowRight data-icon="inline-end" />}
    </Button>
  );
}

type ContactFormProps = {
  defaultInterest?: string;
};

export function ContactForm({ defaultInterest }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-4 border-2 border-primary/70 bg-card p-8">
        <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden />
        <div>
          <p className="font-heading text-xl font-bold text-foreground">
            Message sent.
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={Boolean(state.errors?.name)}
          required
        />
        {state.errors?.name && (
          <p className="text-sm text-destructive">{state.errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          aria-invalid={Boolean(state.errors?.email)}
          required
        />
        {state.errors?.email && (
          <p className="text-sm text-destructive">{state.errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">
          What are you interested in? <span aria-hidden="true">*</span>
        </Label>
        <Select
          name="interest"
          required
          defaultValue={
            interestOptions.some((option) => option.value === defaultInterest)
              ? defaultInterest
              : undefined
          }
        >
          <SelectTrigger id="interest" className="w-full">
            <SelectValue placeholder="Select an option">
              {(value: string) =>
                interestOptions.find((option) => option.value === value)
                  ?.label ?? value
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {interestOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {state.errors?.interest && (
          <p className="text-sm text-destructive">{state.errors.interest}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me a bit about what's on your mind..."
          aria-invalid={Boolean(state.errors?.message)}
          required
        />
        {state.errors?.message && (
          <p className="text-sm text-destructive">{state.errors.message}</p>
        )}
      </div>

      {state.status === "error" && state.message && !state.errors && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
