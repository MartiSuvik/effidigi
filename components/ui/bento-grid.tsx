import { ReactNode } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  href: string;
  cta: string;
}) => (
  <a
    href={href}
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {/* Background and icon container */}
    <div className="absolute inset-0 z-0">{background}</div>

    {/* Animated gradient outline - only visible on hover */}
    <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-gradient-outline" />

    {/* Text content */}
    <div className="relative z-20 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 transition-opacity duration-300 group-hover:opacity-0">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400 transition-opacity duration-300 group-hover:opacity-0">{description}</p>
    </div>

    {/* CTA Button - centered */}
    <div
      className={cn(
        "absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100",
      )}
    >
      <div className="text-center">
        <span className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 block mb-2">
          {cta}
        </span>
        <ArrowUpIcon className="h-6 w-6 mx-auto text-neutral-700 dark:text-neutral-300" />
      </div>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 z-10 transform-gpu bg-black/[.03] opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800/10" />
  </a>
);

export { BentoCard, BentoGrid };
