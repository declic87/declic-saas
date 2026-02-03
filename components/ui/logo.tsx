import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

const sizeMap = {
  sm: { icon: 32, text: "text-lg", sub: "text-[9px]" },
  md: { icon: 40, text: "text-xl", sub: "text-[10px]" },
  lg: { icon: 48, text: "text-2xl", sub: "text-[11px]" },
  xl: { icon: 56, text: "text-3xl", sub: "text-xs" },
};

export function Logo({
  size = "md",
  showText = true,
  variant = "light",
  className,
}: LogoProps) {
  const { icon, text, sub } = sizeMap[size];
  const isDark = variant === "dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon - Éclair dans cercle orange */}
      <div
        className="relative flex items-center justify-center rounded-xl"
        style={{
          width: icon,
          height: icon,
          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: icon * 0.55, height: icon * 0.55 }}
        >
          <path
            d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9066 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              text,
              "font-extrabold leading-none tracking-tight",
              isDark ? "text-primary" : "text-white"
            )}
          >
            DÉCLIC
          </span>
          <span
            className={cn(
              sub,
              "font-medium tracking-wider uppercase",
              isDark ? "text-accent" : "text-accent-light"
            )}
          >
            ENTREPRENEURS
          </span>
        </div>
      )}
    </div>
  );
}

// Logo icon seul (pour favicon, etc.)
export function LogoIcon({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl",
        className
      )}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size * 0.55, height: size * 0.55 }}
      >
        <path
          d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9066 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Logo complet avec fond bleu (pour hero)
export function LogoHero({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div
        className="relative flex items-center justify-center rounded-2xl"
        style={{
          width: 64,
          height: 64,
          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 36, height: 36 }}
        >
          <path
            d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9066 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-extrabold text-white leading-none tracking-tight">
          DÉCLIC
        </span>
        <span className="text-sm font-medium text-accent-light tracking-wider uppercase">
          ENTREPRENEURS
        </span>
      </div>
    </div>
  );
}

export default Logo;
