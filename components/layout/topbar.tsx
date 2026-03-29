import { SITE } from "@/lib/constants";

export function Topbar() {
  return (
    <div className="bg-navy px-[5%] flex justify-between items-center h-11">
      <div className="flex items-center gap-2 text-[0.82rem] text-white/60">
        <span>📞</span>
        <strong className="text-gold-3">{SITE.phone}</strong>
        <span className="hidden sm:inline">
          &nbsp;&nbsp;|&nbsp;&nbsp;Dispatch &amp; Operator assisted reservations
        </span>
      </div>
      <div className="hidden sm:flex gap-6">
        {["Book Now", "Sign In", "Affiliates"].map((label) => (
          <a
            key={label}
            href="#"
            className="text-[0.8rem] text-white/55 no-underline hover:text-gold-3 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
