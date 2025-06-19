import Image from "next/image";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
} & React.ComponentProps<typeof Image>;

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "public/window.svg",
  className,
  ...props
}: ImageWithFallbackProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src ? src : fallbackSrc}
        alt={alt}
        fill
        className="object-cover"
        {...props}
      />
    </div>
  );
};
