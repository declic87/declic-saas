import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Bouton principal - Orange Ambre
        default:
          "bg-accent text-primary hover:bg-accent-dark shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5",
        // Bouton secondaire - Bleu Primary
        secondary:
          "bg-primary text-white hover:bg-primary-light hover:-translate-y-0.5",
        // Bouton outline - Bordure accent
        outline:
          "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-primary",
        // Bouton outline secondaire - Bordure blanche (pour fonds sombres)
        "outline-light":
          "border-2 border-white/50 text-white bg-transparent hover:bg-white/10 hover:border-white",
        // Bouton outline primary
        "outline-primary":
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        // Destructif
        destructive:
          "bg-danger text-white hover:bg-danger-dark hover:-translate-y-0.5",
        // Ghost
        ghost: "hover:bg-slate-100 text-slate-700 hover:text-primary",
        // Link
        link: "text-accent underline-offset-4 hover:underline",
        // Success
        success:
          "bg-success text-white hover:bg-success-dark hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-6 py-3",
        xl: "h-14 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
