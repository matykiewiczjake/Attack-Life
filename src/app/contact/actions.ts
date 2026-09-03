"use server";

import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { interestOptions } from "./interest-options";

const interestValues = interestOptions.map((option) => option.value) as [
  string,
  ...string[],
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(120),
  email: z.string().trim().email("Enter a valid email address."),
  interest: z.enum(interestValues, {
    message: "Choose what you're interested in.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell Ryan a bit more — at least 10 characters.")
    .max(2000, "Keep it under 2000 characters."),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    interest: formData.get("interest"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Check the fields below and try again.",
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        interest: fieldErrors.interest?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  try {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      interest: parsed.data.interest,
      message: parsed.data.message,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please try again in a moment.",
      };
    }
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    message:
      "Thanks — Ryan will get back to you personally, usually within 1-2 business days.",
  };
}
