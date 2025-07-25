"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { GradientButton } from "./gradient-button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  fallbackHref?: string;
  children?: React.ReactNode;
}

export function BackButton({ 
  className, 
  variant = "outline", 
  size = "sm",
  fallbackHref = "/",
  children 
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's previous page in history
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      // Fallback to specific route if no history
      router.push(fallbackHref);
    }
  };

  return (
    <GradientButton
      variant={variant}
      size={size}
      onClick={handleBack}
      className={cn("gap-2", className)}
    >
      <ArrowLeft className="w-4 h-4" />
      {children || "Tagasi"}
    </GradientButton>
  );
}