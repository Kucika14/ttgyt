import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  "aria-labelledby"?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div";
}

export function SectionWrapper({
  id,
  "aria-labelledby": ariaLabelledBy,
  className,
  children,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8", className)}
    >
      {children}
    </Tag>
  );
}
