import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** Always required — never pass an empty string. Decorative images must use alt="". */
  alt: string;
  src: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

/**
 * Wrapper around next/image that enforces a non-empty alt prop at the type level.
 * Use src from placehold.co, e.g. "https://placehold.co/600x400/dbeafe/1e40af?text=Label"
 */
export function PlaceholderImage({
  alt,
  src,
  width,
  height,
  className,
  priority = false,
}: PlaceholderImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
