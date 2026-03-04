import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-dark-border pt-20 pb-8 px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="font-playfair italic font-black text-2xl tracking-widest text-yellow mb-4">URO FITNESS</div>
          <p className="text-[0.9rem] text-[#666] leading-relaxed max-w-[280px]">{SITE_CONFIG.description}</p>
          <div className="flex gap-3 mt-6">
            {Object.entries(SITE_CONFIG.socials).map(([k, v]) => (
              <a key={k} href={v} target="_blank" rel="noopener noreferrer"
                className="clip-btn-sm w-9 h-9 bg-dark-border flex items-center justify-center text-[0.7rem] text-[#666] uppercase transition-all duration-300 hover:bg-yellow hover:text-black no-underline">
                {k.slice(0,2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-condensed text-[0.75rem] tracking-[4px] uppercase text-[#666] mb-6">Programs</h4>
          <ul className="flex flex-col gap-3">
            {["Strength & Power","Fat Loss Elite","CrossFit WOD","Personal Training"].map(p => (
              <li key={p}><Link href="/contact" className="text-[0.9rem] text-white/50 hover:text-yellow transition-colors duration-300 no-underline">{p}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-condensed text-[0.75rem] tracking-[4px] uppercase text-[#666] mb-6">Company</h4>
          <ul className="flex flex-col gap-3">
            {[["Home","/"],["About","/about"],["Contact","/contact"]].map(([l,h]) => (
              <li key={h}><Link href={h} className="text-[0.9rem] text-white/50 hover:text-yellow transition-colors duration-300 no-underline">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-condensed text-[0.75rem] tracking-[4px] uppercase text-[#666] mb-6">Contact</h4>
          <ul className="flex flex-col gap-3 text-[0.9rem] text-white/50">
            <li>{SITE_CONFIG.address}</li>
            <li>{SITE_CONFIG.phone}</li>
            <li>{SITE_CONFIG.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dark-border pt-8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-[0.8rem] text-[#666] tracking-wide">© 2026 URO FITNESS. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="text-[0.8rem] text-[#666] hover:text-yellow transition-colors no-underline">Privacy Policy</Link>
          <Link href="#" className="text-[0.8rem] text-[#666] hover:text-yellow transition-colors no-underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
