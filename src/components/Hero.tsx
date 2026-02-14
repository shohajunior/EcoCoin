"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Hero() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop", // Nature/Mountains
            alt: "Pristine Nature"
        },
        {
            image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop", // Wind/Energy (Fixed URL)
            alt: "Renewable Energy"
        },
        {
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop", // Green City/recycling vibe
            alt: "Sustainable Living"
        }
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentSlide}
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full object-cover absolute inset-0"
                    />
                </AnimatePresence>
                {/* Overlay for readability- stronger gradient */}
                <div className="absolute inset-0 bg-slate-900/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/90" />
            </div>

            {/* Content - Centered */}
            <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col items-center text-center pt-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-sm font-medium mb-8 border border-white/20 shadow-lg"
                >
                    <Leaf className="w-4 h-4" />
                    <span>The Official EcoCoin Platform</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl font-heading drop-shadow-xl"
                >
                    Turn Your <span className="text-emerald-400">Eco Actions</span> into <span className="text-sky-400">Real Rewards</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl leading-relaxed font-light drop-shadow-md"
                >
                    Join the movement. Recycle, save energy, and live sustainably to earn EcoCoins.
                    Spend them at partner businesses or donate to green causes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative"
                >
                    <Button size="lg" className="gap-2 text-base h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <Download className="w-5 h-5" />
                        Download App
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 text-base h-14 px-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" asChild>
                        <Link href="#partners">
                            Become a Partner
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
