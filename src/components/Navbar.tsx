"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Leaf, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Citizens", href: "#citizens" },
        { name: "Business", href: "#business" },
        { name: "Partners", href: "#partners" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-white/60 backdrop-blur-2xl shadow-sm py-3 border-slate-200/20"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Leaf className={cn("w-6 h-6", scrolled ? "text-primary" : "text-emerald-400")} />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight transition-colors", scrolled ? "text-slate-900" : "text-white")}>
                        EcoCoin
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                scrolled
                                    ? "text-slate-600 hover:text-primary"
                                    : "text-slate-200 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="#contact">Contact Us</Link>
                    </Button>
                    <Button size="sm" className="gap-2">
                        <Smartphone className="w-4 h-4" />
                        Download App
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        scrolled ? "text-slate-600" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/80 backdrop-blur-xl border-t border-slate-200/30"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-slate-600 py-2 border-b border-slate-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <Button variant="outline" className="w-full justify-start">
                                    Contact Us
                                </Button>
                                <Button className="w-full justify-start gap-2">
                                    <Smartphone className="w-4 h-4" />
                                    Download App
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
