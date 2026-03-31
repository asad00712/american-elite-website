"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import Logo from "@/public/AmercanLogo.png";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[999] bg-white border-b border-navy/[0.09] px-[5%] flex items-center justify-between h-[74px] transition-all ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(13,21,38,0.15)]"
          : "shadow-[0_2px_12px_rgba(13,21,38,0.07)]"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5 no-underline">
        <Image src={Logo} alt="logo" className="h-17.5 w-24" />
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-[30px] list-none">
        {NAV_LINKS.map((link) => {
          const hasChildren = "children" in link && link.children;
          const active = isActive(link.href);
          const activeClass =
            "text-gold font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gold after:rounded-full";
          const inactiveClass = "text-body-2 hover:text-navy";

          if (hasChildren) {
            return (
              <li key={link.href} className="relative group">
                <button
                  className={`flex items-center gap-1 text-[0.87rem] no-underline font-medium transition-colors relative bg-transparent border-none cursor-pointer ${
                    active ? activeClass : inactiveClass
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg border border-ivory-3 shadow-[0_12px_40px_rgba(13,21,38,0.12)] min-w-[280px] py-2 overflow-hidden">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-3 px-5 py-3 text-[0.85rem] no-underline transition-colors ${
                          pathname === child.href
                            ? "text-gold font-semibold bg-gold/5"
                            : "text-body-2 hover:text-navy hover:bg-ivory-2"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0" />
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[0.87rem] no-underline font-medium transition-colors relative pb-1 ${
                  active ? activeClass : inactiveClass
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
        <li>
          <a
            href="/contact"
            className="bg-navy text-white px-[22px] py-2.5 rounded-[5px] text-[0.87rem] font-semibold no-underline hover:bg-gold hover:shadow-[0_6px_20px_rgba(184,144,46,0.4)] transition-all"
          >
            Book a Ride
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-navy/10 shadow-lg lg:hidden z-50">
          <ul className="flex flex-col list-none p-6 gap-4">
            {NAV_LINKS.map((link) => {
              const hasChildren = "children" in link && link.children;

              if (hasChildren) {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className={`flex items-center gap-1.5 no-underline text-base font-medium transition-colors bg-transparent border-none cursor-pointer p-0 ${
                        isActive(link.href)
                          ? "text-gold font-semibold"
                          : "text-body-2 hover:text-navy"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="list-none mt-2 ml-3 flex flex-col gap-2 border-l-2 border-gold/20 pl-4">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={`no-underline text-[0.9rem] font-medium transition-colors ${
                                pathname === child.href
                                  ? "text-gold"
                                  : "text-body-3 hover:text-navy"
                              }`}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`no-underline text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-gold font-semibold"
                        : "text-body-2 hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block bg-navy text-white px-6 py-3 rounded-[5px] font-semibold text-sm no-underline"
              >
                Book a Ride
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
