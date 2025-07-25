'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import Link from 'next/link';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

export function Footer() {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();
	
	const footerLinks: FooterSection[] = [
		{
			label: t('footer.solutions', 'Teenused'),
			links: [
				{ title: 'AI Phone Agent', href: '/#services' },
				{ title: 'Data AI Analytics', href: '/services/data-ai' },
				{ title: 'AI Chat Agent', href: '/#features' },
				{ title: 'CRM Integration', href: '/#contact' },
			],
		},
		{
			label: t('footer.company', 'Ettevõte'),
			links: [
				{ title: t('navigation.blog', 'Blogi'), href: '/blog' },
				{ title: t('navigation.contact', 'Kontakt'), href: '/#contact' },
			],
		},
	];
	
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<Link href="/" className="inline-block">
						<span className="text-2xl font-bold terminal-text">EFFI</span>
					</Link>
					<p className="text-muted-foreground text-sm max-w-xs">
						Me ehitame AI-süsteeme selleks, et te teeniksite rohkem, kulutaksite vähem ja kasvaksite kiiremini.
					</p>
					<div className="space-y-2 mt-6">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<PhoneCall className="w-4 h-4" />
							<span>+372 5340 0432</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Mail className="w-4 h-4" />
							<span>marti@effidigi.com</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin className="w-4 h-4" />
							<span>Õismäe tee 99, Tallinn, Eesti</span>
						</div>
					</div>
					<p className="text-muted-foreground mt-8 text-sm">
						© {currentYear} EFFI. {t('footer.rights', 'Kõik õigused kaitstud.')}
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-lg font-medium text-foreground mb-4">{section.label}</h3>
								<ul className="text-muted-foreground space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-colors duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};