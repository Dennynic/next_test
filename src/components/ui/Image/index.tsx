"use client";
import Image from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
} & React.ComponentProps<typeof Image>;

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "/default.jpg",
  className,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        src={error || !src ? fallbackSrc : src}
        alt={alt}
        fill
        className="object-cover"
        onError={handleError}
        {...props}
      />
    </div>
  );
};
