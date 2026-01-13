import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  placeholderColor?: string;
}

/**
 * OptimizedImage component with:
 * - Lazy loading for non-priority images
 * - Blur placeholder while loading
 * - Smooth fade-in transition
 * - Priority loading for hero images
 */
const OptimizedImage = ({
  src,
  alt,
  priority = false,
  className,
  containerClassName,
  placeholderColor = "hsl(var(--muted))",
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      style={{ backgroundColor: placeholderColor }}
    >
      {/* Skeleton/Blur placeholder */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{
          background: `linear-gradient(90deg, ${placeholderColor} 0%, hsl(var(--muted-foreground) / 0.1) 50%, ${placeholderColor} 100%)`,
          backgroundSize: "200% 100%",
          animation: isInView && !isLoaded ? "shimmer 1.5s infinite" : "none",
        }}
      />

      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      )}

      {/* Add shimmer animation styles */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export { OptimizedImage };
