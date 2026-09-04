import { Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";

const channels = [
  {
    icon: Phone,
    title: "Call Ryan",
    description: "Have a question? Give Ryan a call directly.",
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    description: "Follow along or send Ryan a message.",
  },
  {
    icon: Mail,
    title: "Email Ryan",
    description: "Prefer email? Send Ryan a note.",
  },
];

export function ConnectChannels() {
  return (
    <div>
      <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
        Other Ways to Connect
      </p>
      <ul className="mt-6 space-y-4">
        {channels.map((channel) => (
          <li key={channel.title}>
            <div className="flex items-start gap-4 border border-border/70 p-6">
              <channel.icon
                className="mt-0.5 size-7 shrink-0 text-primary"
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <p className="font-heading font-bold text-foreground">
                  {channel.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {channel.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
