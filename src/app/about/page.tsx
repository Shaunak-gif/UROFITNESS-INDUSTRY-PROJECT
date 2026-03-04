import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Marquee from "@/components/ui/Marquee";
import Footer from "@/components/layout/Footer";
import { TRAINERS, EQUIPMENT, WHY_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — URO FITNESS",
  description: "The story behind Pune's premium fitness brand.",
};

const marqueeItems = ["Mission: Excellence","Vision: Transform Lives","Values: Discipline","Community First","Science-Backed","Results Driven"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden mt-[72px]">
        <div className="absolute inset-0 animate-hero-zoom"
          style={{ backgroundImage:"url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80')", backgroundSize:"cover", backgroundPosition:"center", filter:"brightness(0.3) saturate(0.5)" }} />
        <div className="relative z-10 px-[5vw]">
          <div className="font-condensed text-[0.7rem] tracking-[5px] uppercase text-[#666] mb-4">
            URO FITNESS / <span className="text-yellow">About</span>
          </div>
          <h1 className="font-bebas leading-none text-white" style={{ fontSize:"clamp(3rem,8vw,8rem)" }}>
            WE ARE <em className="text-yellow not-italic">ELITE</em>
          </h1>
          <p className="text-white/50 max-w-[400px] mt-4 leading-relaxed">
            The story behind the brand that's redefining premium fitness in India.
          </p>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-32 px-[5vw] bg-[#050505] grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative">
          {/* ⚙️ Replace with your own brand/gym image */}
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
            alt="URO Fitness Story"
            className="w-full object-cover"
            style={{ aspectRatio:"4/5", filter:"grayscale(20%) brightness(0.8)", clipPath:"polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }} />
          <div className="absolute bottom-12 -right-8 bg-yellow text-black p-8 text-center"
            style={{ clipPath:"polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}>
            <div className="font-bebas text-5xl leading-none">2018</div>
            <div className="font-condensed text-[0.65rem] tracking-[3px] uppercase font-bold">EST.</div>
          </div>
        </div>
        <div>
          <SectionTag>Our Story</SectionTag>
          <h2 className="font-bebas leading-none text-white mb-6" style={{ fontSize:"clamp(2.5rem,5vw,5rem)" }}>
            FROM PASSION<em className="text-yellow not-italic block">TO LEGACY</em>
          </h2>
          <p className="text-white/60 leading-relaxed mb-6">
            URO FITNESS was born from a simple belief: that everyone deserves access to elite-level training. Founded in Pune in 2018 by competitive athlete and coach Vikram Rathore, URO started as a 2,000 sq ft warehouse gym with a handful of members and a clear vision.
          </p>
          <blockquote className="border-l-[3px] border-yellow pl-6 text-[1.1rem] italic text-white/80 leading-relaxed my-8">
            "We didn't want to build just another gym. We wanted to build a place where ordinary people could achieve extraordinary things."
          </blockquote>
          <p className="text-white/60 leading-relaxed">
            Today, URO FITNESS is Pune's most recognized premium fitness brand — a 15,000 sq ft state-of-the-art facility with 18 world-class coaches, 2,400+ members, and over 950 documented transformations.
          </p>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Trainers */}
      <section className="py-32 px-[5vw] bg-[#0d0d0d]">
        <SectionTag>The Team</SectionTag>
        <h2 className="font-bebas leading-none text-white mb-16" style={{ fontSize:"clamp(2.5rem,5vw,5rem)" }}>
          MEET YOUR <em className="text-yellow not-italic">COACHES</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark-border">
          {TRAINERS.map((t, i) => (
            <div key={i} className="bg-[#111] overflow-hidden relative group cursor-pointer">
              <div className="relative overflow-hidden" style={{ aspectRatio:"3/4" }}>
                {/* ⚙️ Replace t.image with your trainer's image URL in constants.ts */}
                <img src={t.image} alt={t.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{ filter:"grayscale(40%) brightness(0.7)" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-8"
                  style={{ background:"linear-gradient(to top, rgba(5,5,5,0.95) 30%, transparent 70%)" }}>
                  <div className="font-condensed text-[0.7rem] tracking-[3px] text-yellow uppercase mb-1">{t.specialty}</div>
                  <div className="font-condensed text-[1.6rem] font-bold tracking-wide uppercase text-white mb-1">{t.name}</div>
                  <div className="text-[0.8rem] text-[#666]">{t.exp}</div>
                  <div className="flex gap-3 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    {["IG","YT"].map(s => (
                      <div key={s} className="w-8 h-8 bg-yellow/15 border border-yellow/30 flex items-center justify-center text-[0.75rem] text-yellow cursor-pointer hover:bg-yellow hover:text-black transition-all duration-300">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="py-32 px-[5vw] bg-[#050505]">
        <SectionTag>World-Class Facilities</SectionTag>
        <h2 className="font-bebas leading-none text-white mb-16" style={{ fontSize:"clamp(2.5rem,5vw,5rem)" }}>
          EQUIPMENT THAT <em className="text-yellow not-italic">PERFORMS</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border">
          {EQUIPMENT.map((e, i) => (
            <div key={i} className="bg-[#111] p-10 text-center hover:bg-yellow/[0.05] transition-colors duration-300 cursor-pointer">
              <span className="text-4xl block mb-4">{e.emoji}</span>
              <div className="font-condensed text-[1rem] font-bold tracking-[2px] uppercase text-white mb-2">{e.name}</div>
              <div className="text-[0.8rem] text-[#666] leading-relaxed">{e.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-32 px-[5vw] bg-[#0d0d0d]">
        <SectionTag>Why URO</SectionTag>
        <h2 className="font-bebas leading-none text-white mb-16" style={{ fontSize:"clamp(2.5rem,5vw,5rem)" }}>
          THE URO <em className="text-yellow not-italic">DIFFERENCE</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-border">
          {WHY_US.map((w, i) => (
            <div key={i} className="bg-[#111] p-12 flex gap-6 hover:bg-yellow/[0.03] transition-colors duration-300 group">
              <span className="font-bebas text-5xl text-yellow/30 leading-none flex-shrink-0 group-hover:text-yellow/80 transition-colors duration-300">{w.num}</span>
              <div>
                <h3 className="font-condensed text-[1.2rem] font-bold tracking-[2px] uppercase text-white mb-3">{w.title}</h3>
                <p className="text-[0.9rem] text-[#666] leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-[5vw] text-center overflow-hidden bg-[#050505]">
        <h2 className="font-bebas leading-[0.95] text-white mb-8" style={{ fontSize:"clamp(3rem,8vw,8rem)" }}>
          READY TO TRAIN<em className="text-yellow not-italic block">AT THE TOP?</em>
        </h2>
        <Link href="/contact" className="clip-btn inline-block bg-yellow text-black font-condensed font-bold text-[0.85rem] tracking-[3px] uppercase px-12 py-4 hover:bg-white transition-colors duration-300 no-underline">
          Join URO Today
        </Link>
      </section>

      <Footer />
    </>
  );
}
