"use client";

import { motion } from "framer-motion";
import { Leaf, ScanLine, Wallet, ShoppingBag } from "lucide-react";

const steps = [
    {
        icon: Leaf,
        title: "Take Action",
        description: "Recycle, use public transport, or participate in eco-events. Small actions make a big difference.",
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: ScanLine,
        title: "Verify Instantly",
        description: "Scan the QR code at the recycling station or upload a photo verification through the app.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Wallet,
        title: "Earn EcoCoins",
        description: "Receive EcoCoins directly in your digital wallet. Track your environmental impact in real-time.",
        color: "bg-lime-100 text-lime-600",
    },
    {
        icon: ShoppingBag,
        title: "Spend Rewards",
        description: "Use your EcoCoins for discounts at partner shops, cafes, or donate them to green projects.",
        color: "bg-purple-100 text-purple-600",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-600">
                        Our ecosystem makes it easy to turn your sustainable habits into tangible value.
                        Just follow these four simple steps.
                    </p>
                </div>

                {/* Steps Grid / Slider */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-400/50 transition-all duration-300 relative group cursor-pointer"
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden absolute top-12 -right-4 w-8 h-[2px] bg-slate-200 z-0" />
                            )}

                            <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                                <step.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
