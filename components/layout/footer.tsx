import { SITE, FOOTER_SERVICES, FOOTER_COMPANY } from "@/lib/constants";
import Logo from "@/public/AmercanLogo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy pt-[76px]">
      <div className="px-[5%]">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-14 mb-14">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 no-underline">
              <Image src={Logo} alt="logo" className="h-16 w-24" />
            </a>
            <p className="text-[0.86rem] text-white/[0.42] leading-7 mt-3.5 max-w-[350px]">
              New Jersey&apos;s premier limousine service. Professional,
              reliable, and affordable transportation available 24 hours a day,
              7 days a week for all your local and long distance travel needs.
            </p>
            <div className="flex gap-2.5 mt-5">
              {["f", "in", "\uD835\uDD4F", "\u25B6"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-[37px] h-[37px] rounded-[7px] border border-white/10 flex items-center justify-center text-white/40 text-[0.8rem] no-underline hover:border-gold hover:text-gold-3 hover:bg-gold/[0.07] transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[0.7rem] font-bold tracking-[2px] uppercase text-gold-2 mb-[18px]">
              Services
            </div>
            <ul className="list-none flex flex-col gap-[9px]">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-[0.86rem] text-white/[0.42] no-underline hover:text-gold-3 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[0.7rem] font-bold tracking-[2px] uppercase text-gold-2 mb-[18px]">
              Company
            </div>
            <ul className="list-none flex flex-col gap-[9px]">
              {FOOTER_COMPANY.map((c) => (
                <li key={c}>
                  <a
                    href="#"
                    className="text-[0.86rem] text-white/[0.42] no-underline hover:text-gold-3 transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.7rem] font-bold tracking-[2px] uppercase text-gold-2 mb-[18px]">
              Contact
            </div>
            <ul className="list-none flex flex-col gap-[9px]">
              <li>
                <span className="text-[0.86rem] text-white/[0.42]">
                  {SITE.address}
                </span>
              </li>
              <li>
                <span className="text-[0.86rem] text-white/[0.42]">
                  {SITE.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-[0.86rem] text-white/[0.42] no-underline hover:text-gold-3 transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[0.86rem] text-white/[0.42] no-underline hover:text-gold-3 transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-[0.86rem] text-white/[0.42]">
                  Available 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.07] py-[22px] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[0.79rem] text-white/[0.28]">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gold-2">American Elite Limousine</span>. All rights
            reserved.
          </p>
          <p className="text-[0.79rem] text-white/[0.28]">
            Serving <span className="text-gold-2">New Jersey</span> &amp; the{" "}
            <span className="text-gold-2">TriState Area</span> · 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}
