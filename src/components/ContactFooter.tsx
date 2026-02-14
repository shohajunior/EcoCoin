"use client";

import { Button } from "@/components/ui/button";
import { Leaf, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function ContactFooter() {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6">
                            Get in Touch
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                            Have Questions? <br />
                            <span className="text-emerald-400">Let's Talk.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-md">
                            Whether you're a business looking to partner or a user with a suggestion, we'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Email Us</h4>
                                    <a href="mailto:diyorahasanova1709@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                                        diyorahasanova1709@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Call Us</h4>
                                    <a href="tel:+998937771298" className="text-slate-400 hover:text-emerald-400 transition-colors">
                                        +998937771298
                                    </a>
                                </div>
                            </div>



                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">First Name</label>
                                    <input type="text" className="w-full h-11 px-4 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-white" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                                    <input type="text" className="w-full h-11 px-4 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-white" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input type="email" className="w-full h-11 px-4 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-white" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <textarea className="w-full h-32 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-white resize-none" placeholder="How can we help you?" />
                            </div>
                            <Button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="border-t border-slate-800 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-emerald-500/10 p-2 rounded-full">
                                <Leaf className="w-6 h-6 text-emerald-500" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                EcoCoin
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm">
                            Empowering citizens and businesses to build a sustainable future together.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#how-it-works" className="hover:text-emerald-400">How It Works</Link></li>
                            <li><Link href="#citizens" className="hover:text-emerald-400">For Citizens</Link></li>
                            <li><Link href="#business" className="hover:text-emerald-400">For Business</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400">Mobile App</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-emerald-400">About Us</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400">Carrers</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400">Press</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe for updates on eco-challenges.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email" className="h-10 px-3 bg-slate-900 border border-slate-700 rounded-md text-sm text-white w-full focus:outline-none focus:border-emerald-500" />
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Go</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} EcoCoin. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
