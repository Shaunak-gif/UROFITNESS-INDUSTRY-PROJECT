import { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact — URO FITNESS",
  description: "Get in touch with URO FITNESS. Join the elite.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden mt-[72px]">
        <div className="absolute inset-0 animate-hero-zoom"
          style={{ backgroundImage:"url('https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=1920&q=80')", backgroundSize:"cover", backgroundPosition:"center", filter:"brightness(0.2) saturate(0.3)" }} />
        <div className="relative z-10 px-[5vw]">
          <div className="font-condensed text-[0.7rem] tracking-[5px] uppercase text-[#666] mb-4">
            URO FITNESS / <span className="text-yellow">Contact</span>
          </div>
          <h1 className="font-bebas leading-none text-white" style={{ fontSize:"clamp(3rem,8vw,8rem)" }}>
            GET IN <em className="text-yellow not-italic">TOUCH</em>
          </h1>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
