import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-orange text-white hover:bg-orange-dark",
        secondary:
          "border-transparent bg-blue-dark text-white hover:bg-blue-darker",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
        success:
          "border-transparent bg-emerald-500 text-white hover:bg-emerald-600",
        warning:
          "border-transparent bg-amber-500 text-white hover:bg-amber-600",
        outline: "text-blue-dark border-gray-300",
        hot: "border-transparent bg-red-100 text-red-700",
        warm: "border-transparent bg-amber-100 text-amber-700",
        cold: "border-transparent bg-blue-100 text-blue-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
