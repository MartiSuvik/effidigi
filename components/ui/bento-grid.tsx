import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// Legacy BentoCard for features-section compatibility
export const BentoCard = ({
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
    <div className="absolute inset-0 z-0">{background}</div>

    {/* Hover overlay */}
    <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-r from-[#00ffb2]/20 via-[#00b880]/20 to-[#00ffb2]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-gradient-x" />

    <div className="relative z-20 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 transition-opacity duration-300 group-hover:opacity-0">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400 transition-opacity duration-300 group-hover:opacity-0">{description}</p>
    </div>

    {/* CTA on hover */}
    <div
      className={cn(
        "absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-none bg-[#00ffb2] hover:bg-[#00b880] text-black">
        <div className="flex items-center gap-2">
          {cta}
          <ArrowUpIcon className="h-4 w-4" />
        </div>
      </Button>
    </div>

    <div className="absolute inset-0 z-10 transform-gpu bg-black/[.03] opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800/10" />
  </a>
);
