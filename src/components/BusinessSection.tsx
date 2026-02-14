"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    "New Customer Acquisition",
    "Integrated Loyalty System",
    "Automated CSR & ESG Reporting",
    "Enhanced Brand Visibility",
];

const mockLogos = [
    "Greens CAFE", "EcoMart", "BioStore", "Refresh", "Urban EATS",
];

export function BusinessSection() {
    return (
        <section id="business" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                        For Business Partners
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        Grow Your Business, <span className="text-secondary">Sustainably.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Join the EcoCoin network to attract eco-conscious customers, boost loyalty, and achieve your sustainability goals with zero hassle.
                    </p>
                </div>

                {/* Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image / Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div className="bg-slate-100 p-2 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-slate-600" />
                                </div>
                                <div className="text-sm font-bold text-emerald-600">+127% Visits</div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "EcoMart", action: "Groceries", amount: "+50 EC" },
                                    { name: "Urban Eats", action: "Vegan Lunch", amount: "+30 EC" },
                                    { name: "BioStore", action: "Reusable Cup", amount: "+20 EC" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">{item.name.substring(0, 2)}</div>
                                        <div className="flex-1">
                                            <div className="font-medium text-slate-900">{item.name}</div>
                                            <div className="text-xs text-slate-500">{item.action}</div>
                                        </div>
                                        <div className="font-bold text-emerald-600">{item.amount}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                <p className="text-sm text-slate-500 mb-4">Partner Dashboard Preview</p>
                                <Button variant="outline" className="w-full">View Demo</Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features List */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Partner Benefits</h3>
                        <ul className="space-y-4 mb-8">
                            {features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-slate-700"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                        <Button size="lg" className="h-12 px-8 bg-secondary hover:bg-sky-700" asChild>
                            <Link href="#partners">Become a Partner</Link>
                        </Button>
                    </div>
                </div>

                {/* Logo Strip - Non-stop Slider */}
                <div className="border-t border-slate-200 pt-12 overflow-hidden">
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
                        Trusted by Innovative Brands
                    </p>

                    <div className="relative flex overflow-hidden mask-linear-gradient">
                        <motion.div
                            className="flex gap-16 items-center whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20
                            }}
                        >
                            {[...mockLogos, ...mockLogos, ...mockLogos, ...mockLogos].map((logo, i) => (
                                <div key={i} className="text-xl font-bold text-slate-400 flex items-center gap-2 flex-shrink-0 hover:text-slate-600 transition-colors cursor-pointer">
                                    <Building2 className="w-6 h-6" />
                                    {logo}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
