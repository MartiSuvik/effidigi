"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-foreground hover:text-primary transition-colors duration-200"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2">
              {/* Invisible bridge area to maintain hover */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full h-6 bg-transparent" />
              
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-card/95 backdrop-blur-md rounded-xl overflow-hidden border border-border shadow-xl mt-2"
              >
                <motion.div
                  layout
                  className="w-max h-full p-3"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={className}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex flex-col p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group w-32">
      <div className="relative w-20 h-20 mx-auto overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200 mb-3">
        <Image
          src={src}
          width={80}
          height={80}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium text-foreground leading-tight">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 px-3 rounded-md hover:bg-muted/30"
    >
      {children}
    </Link>
  );
};