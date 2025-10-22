import { Send } from 'lucide-react';
import React, { useState } from 'react';

export function Contact({ scrollRef }) {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:poudelbibek38@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoLink;
    };
    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="mb-16 px-6 py-20 rounded-xl p-6 bg-zinc-800/30 backdrop-blur-sm ring-1 ring-white/5 hover:ring-fuchsia-500/20 transition mx-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-10">
                        Get in Touch
                    </h2>
                    <p className="text-sm text-gray-400 mb-12 max-w-xl mx-auto">
                        Whether you want to discuss a project, collaborate on something awesome, or just say hi - my inbox is open 👇
                    </p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Your Name"
                            required
                            className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 focus:border-purple-500 focus:outline-none"
                        />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Your Email"
                            required
                            className="px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 focus:border-purple-500 focus:outline-none"
                        />
                        <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            type="text"
                            placeholder="Subject"
                            required
                            className="px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 focus:border-purple-500 focus:outline-none"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message"
                            required
                            className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 focus:border-purple-500 focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 col-span-1 md:col-span-2 bg-purple-600 hover:bg-purple-700 transition text-white font-medium py-2 px-6 rounded-lg flex items-center justify-center gap-2"
                        >
                            <Send size={16} /> Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}