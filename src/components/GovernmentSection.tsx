"use client";

import { motion } from "framer-motion";
import { Building, BarChart, Leaf } from "lucide-react";

export function GovernmentSection() {
    return (
        <section id="government" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-400 text-sm font-medium mb-6 border border-emerald-800">
                            For Government & Institutions
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                            Smart Cities Run on <span className="text-emerald-400">Data.</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Leverage the EcoCoin platform to track city-wide environmental performance, monitor waste reduction in real-time, and engage citizens in your smart city initiatives.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: BarChart,
                                    title: "Real-Time Environmental Analytics",
                                    text: "Track CO2 reduction and recycling rates across districts."
                                },
                                {
                                    icon: Building,
                                    title: "Smart City Integration",
                                    text: "Connect with existing waste management infrastructure and IoT sensors."
                                },
                                {
                                    icon: Leaf,
                                    title: "Circular Economy",
                                    text: "Turn waste into a valuable resource within the local economy."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-emerald-400">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Dashboard Visualization */}
                        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-1 shadow-2xl">
                            <div className="bg-slate-900 rounded-xl p-6 h-[400px] flex flex-col items-center justify-center">
                                <div className="w-full h-full border border-dashed border-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    {/* Mock Map / Chart */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />
                                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-ping delay-75" />
                                    <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-emerald-600 rounded-full animate-ping delay-150" />

                                    <div className="bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-lg absolute bottom-6 left-6 right-6">
                                        <div className="flex justify-between items-end mb-2">
                                            <div className="text-slate-400 text-xs">Total Recycled (Today)</div>
                                            <div className="text-emerald-400 font-mono text-xl">12,450 kg</div>
                                        </div>
                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-emerald-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
