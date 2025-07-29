"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context for managing which dropdown is open
const DropdownContext = createContext<{
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
}>({
  activeDropdown: null,
  setActiveDropdown: () => {},
});

const DropdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <DropdownContext.Provider value={{ activeDropdown, setActiveDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

type AnimatedDropdownMenuProps = {
  options: {
    label: string;
    onClick: () => void;
    Icon?: React.ReactNode;
  }[];
  children: React.ReactNode;
  id: string; // Add unique ID for each dropdown
};

const AnimatedDropdownMenu = ({ options, children, id }: AnimatedDropdownMenuProps) => {
  const { activeDropdown, setActiveDropdown } = useContext(DropdownContext);
  const isOpen = activeDropdown === id;

  const toggleDropdown = () => {
    if (isOpen) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={toggleDropdown}
        variant="ghost"
        className="px-4 py-2 bg-transparent hover:bg-accent/20 shadow-none border-none rounded-xl backdrop-blur-sm text-foreground hover:text-primary transition-colors font-medium"
      >
        {children ?? "Menu"}
        <>
          <motion.span
            className="ml-2"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", type: "spring" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -5, scale: 0.95, filter: "blur(10px)" }}
            animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ y: -5, scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "circInOut", type: "spring" }}
            className="absolute z-10 w-48 mt-2 p-1 bg-background/95 border border-border rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm flex flex-col gap-2"
          >
            {options && options.length > 0 ? (
              options.map((option, index) => (
                <motion.button
                  initial={{
                    opacity: 0,
                    x: 10,
                    scale: 0.95,
                    filter: "blur(10px)",
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    x: 10,
                    scale: 0.95,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  whileHover={{
                    color: "hsl(var(--primary))",
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  key={option.label}
                  onClick={() => {
                    option.onClick();
                    setActiveDropdown(null); // Close dropdown after clicking an option
                  }}
                  className="px-2 py-3 cursor-pointer text-foreground text-sm rounded-lg w-full text-left flex items-center gap-x-2 hover:text-foreground"
                >
                  {option.Icon}
                  {option.label}
                </motion.button>
              ))
            ) : (
              <div className="px-4 py-2 text-muted-foreground text-xs">No options</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { AnimatedDropdownMenu, DropdownProvider };
