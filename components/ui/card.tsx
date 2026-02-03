import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-gray-200 bg-white text-blue-dark shadow-sm transition-all duration-300 hover:shadow-md",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight font-sans",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Card spéciale pour les statistiques Déclic
const StatCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    value: string | number;
    subtitle?: string;
    icon?: React.ReactNode;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
  }
>(({ className, title, value, subtitle, icon, trend, trendValue, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg",
      className
    )}
    {...props}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-2 text-3xl font-bold text-blue-dark">{value}</p>
        {subtitle && (
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        )}
        {trend && trendValue && (
          <div className="mt-2 flex items-center gap-1">
            {trend === "up" && (
              <span className="text-emerald-500">↑ {trendValue}</span>
            )}
            {trend === "down" && (
              <span className="text-red-500">↓ {trendValue}</span>
            )}
            {trend === "neutral" && (
              <span className="text-gray-400">→ {trendValue}</span>
            )}
          </div>
        )}
      </div>
      {icon && (
        <div className="rounded-xl bg-orange/10 p-3 text-orange">
          {icon}
        </div>
      )}
    </div>
  </div>
));
StatCard.displayName = "StatCard";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, StatCard };
