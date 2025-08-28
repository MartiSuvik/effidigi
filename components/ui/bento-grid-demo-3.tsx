"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconMessage,
  IconClock,
  IconBrain,
  IconTarget,
  IconMoodSmile,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { MessageSquareReply } from "lucide-react";
import { useTranslation } from '@/lib/i18n';

// Hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return isMobile;
};

// Hook for intersection observer
const useInViewAnimation = (threshold = 0.2) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};


export default function BentoGridThirdDemo() {
  const { t } = useTranslation();
  
  const items = [
    {
      title: t('serviceTemplate.bentoGrid.items.aiConversations.title'),
      description: (
        <span className="text-sm">
          {t('serviceTemplate.bentoGrid.items.aiConversations.description')}
        </span>
      ),
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t('serviceTemplate.bentoGrid.items.automatedSupport.title'),
      description: (
        <span className="text-sm">
          {t('serviceTemplate.bentoGrid.items.automatedSupport.description')}
        </span>
      ),
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <IconClock className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t('serviceTemplate.bentoGrid.items.contextAware.title'),
      description: (
        <span className="text-sm">
          {t('serviceTemplate.bentoGrid.items.contextAware.description')}
        </span>
      ),
      header: <SkeletonThree />,
      className: "md:col-span-1",
      icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t('serviceTemplate.bentoGrid.items.leadQualification.title'),
      description: (
        <span className="text-sm">
          {t('serviceTemplate.bentoGrid.items.leadQualification.description')}
        </span>
      ),
      header: <SkeletonFour />,
      className: "md:col-span-2",
      icon: <IconTarget className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t('serviceTemplate.bentoGrid.items.sentimentDetection.title'),
      description: (
        <span className="text-sm">
          {t('serviceTemplate.bentoGrid.items.sentimentDetection.description')}
        </span>
      ),
      header: <SkeletonFive />,
      className: "md:col-span-1",
      icon: <IconMoodSmile className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const isMobile = useIsMobile();
  const { ref, isInView } = useInViewAnimation();
  
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Determine animation state based on device and view status
  const animationState = isMobile && isInView ? "animate" : "initial";

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isMobile ? animationState : "initial"}
      whileHover={!isMobile ? "animate" : undefined}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00ffb2] to-[#00b880] shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00ffb2] to-[#00b880] shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00ffb2] to-[#00b880] shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const isMobile = useIsMobile();
  const { ref, isInView } = useInViewAnimation();
  
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  
  const arr = new Array(6).fill(0);
  
  // Determine animation state based on device and view status
  const animationState = isMobile && isInView ? "hover" : "animate";
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isMobile ? animationState : "animate"}
      whileHover={!isMobile ? "hover" : undefined}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const isMobile = useIsMobile();
  const { ref, isInView } = useInViewAnimation();
  
  // Define rotation state based on device and view status
  const rotationState = isMobile && isInView ? { rotate: -15 } : {};

  return (
    <motion.div
      ref={ref}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 animate-gradient-flow"
    >
      <motion.div className="h-full w-full rounded-lg flex items-center justify-center">
        <motion.div
          whileHover={!isMobile ? { rotate: -15 } : undefined}
          animate={isMobile ? rotationState : undefined}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <MessageSquareReply className="h-24 w-24 text-white/100" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { ref, isInView } = useInViewAnimation();
  
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  
  // Determine animation state based on device and view status
  const animationState = isMobile && isInView ? "hover" : "initial";
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isMobile ? animationState : "animate"}
      whileHover={!isMobile ? "hover" : undefined}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://res.cloudinary.com/effichat/image/upload/brenda.png"
          alt={t('serviceTemplate.bentoGrid.altTexts.customer')}
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4">
          {t('serviceTemplate.bentoGrid.customerMessages.billing')}
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {t('serviceTemplate.bentoGrid.tags.highPriority')}
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/effichat/image/upload/brenda.png"
          alt={t('serviceTemplate.bentoGrid.altTexts.customer')}
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4">
          {t('serviceTemplate.bentoGrid.customerMessages.sales')}
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {t('serviceTemplate.bentoGrid.tags.qualifiedLead')}
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://res.cloudinary.com/effichat/image/upload/brenda.png"
          alt={t('serviceTemplate.bentoGrid.altTexts.salesTeam')}
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4">
          {t('serviceTemplate.bentoGrid.customerMessages.support')}
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {t('serviceTemplate.bentoGrid.tags.converting')}
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { ref, isInView } = useInViewAnimation();
  
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Determine animation state based on device and view status
  const animationState = isMobile && isInView ? "animate" : "initial";

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isMobile ? animationState : "initial"}
      whileHover={!isMobile ? "animate" : undefined}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://res.cloudinary.com/effichat/image/upload/brenda.png"
          alt={t('serviceTemplate.bentoGrid.altTexts.customer')}
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-white">
          {t('serviceTemplate.bentoGrid.customerMessages.urgent')}
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-white">{t('serviceTemplate.bentoGrid.customerMessages.response')}</p>
        <img
          src="https://res.cloudinary.com/effichat/image/upload/silver_ai_pfp.png"
          alt={t('serviceTemplate.bentoGrid.altTexts.ai')}
          height="24"
          width="24"
          className="rounded-full h-6 w-6"
        />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "AI-Powered Conversations",
    description: (
      <span className="text-sm">
        Deliver natural, human-like interactions that engage your customers 24/7.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Customer Support",
    description: (
      <span className="text-sm">
        Reduce response times and free your team by letting AI handle FAQs.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconClock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Context-Aware Responses",
    description: (
      <span className="text-sm">
        Chatbot remembers past messages to personalize user experiences.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lead Qualification & Conversion",
    description: (
      <span className="text-sm">
Automatically capture leads, qualify them with smart questions, and hand off hot prospects to your team.      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTarget className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Sentiment & Intent Detection",
    description: (
      <span className="text-sm">
        Understand customer mood & intent to respond more effectively & improve satisfaction.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconMoodSmile className="h-4 w-4 text-neutral-500" />,
  },
];
