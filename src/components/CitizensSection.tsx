"use client";

import { motion } from "framer-motion";
import { Gift, Users, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
    {
        icon: Gift,
        title: "Real Rewards",
        description: "Exchange EcoCoins for coffee, cinema tickets, or grocery discounts.",
    },
    {
        icon: Users,
        title: "Community",
        description: "Join challenges, compete on leaderboards, and meet like-minded people.",
    },
    {
        icon: BarChart3,
        title: "Track Impact",
        description: "Visualize your carbon footprint reduction and waste saved over time.",
    },
    {
        icon: Globe,
        title: "Global Goal",
        description: "Contribute to local and global sustainability targets effortlessly.",
    },
];

export function CitizensSection() {
    return (
        <section id="citizens" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="flex-1 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-6">
                            For Citizens
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Your Eco Habits, <br />
                            <span className="text-primary">Celebrated & Rewarded.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            EcoCoin isn't just an app; it's a lifestyle companion. We believe that doing good shouldn't be a sacrifice. It should be fun, social, and rewarding.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4 p-3 rounded-xl hover:bg-emerald-50/50 transition-colors duration-300 group cursor-default">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        <benefit.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{benefit.title}</h4>
                                        <p className="text-sm text-slate-600">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                            Join the Community
                        </Button>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 relative w-full max-w-md lg:max-w-full">
                        <div className="aspect-square relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
                            {/* Abstract representation of "Community" and "Rewards" */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-sky-500/10" />

                            {/* Floating Cards Mockup */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                className="absolute top-1/4 left-8 right-8 bg-white p-4 rounded-xl shadow-lg border border-slate-100 backdrop-blur-sm bg-white/90 hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" alt="Avatar" />
                                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                                            <div className="bg-emerald-500 w-3 h-3 rounded-full border border-white"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">Emily Chen</div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-medium">Eco-Warrior</span>
                                            <span className="text-xs text-slate-400">• Lvl 5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-emerald-500" />
                                </div>
                                <div className="mt-2 flex justify-between text-xs text-slate-500">
                                    <span>Level 5 Eco-Warrior</span>
                                    <span>250/500 XP</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="absolute bottom-1/4 right-8 left-16 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4"
                            >
                                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                                    <Gift className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-800">Free Coffee</div>
                                    <div className="text-xs text-slate-500">-50 EcoCoins</div>
                                </div>
                                <Button size="sm" variant="outline" className="ml-auto">Redeem</Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
