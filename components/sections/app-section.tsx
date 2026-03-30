"use client";

const APP_FEATURES = [
  "Instant booking with real-time confirmation",
  "Live GPS driver tracking from pickup to drop-off",
  "Modify or cancel reservations anytime, anywhere",
  "Digital receipts and corporate expense reports",
  "24/7 in-app support and dispatch chat",
] as const;
import { ScrollReveal } from "./scroll-reveal";

export function AppSection() {
  return (
    <section className="py-24 px-[5%] bg-ivory-2" id="app">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: Phone mockup */}
        <ScrollReveal className="relative flex justify-center items-end h-[360px] lg:h-[460px]">
          {/* Background phone */}
          <div className="absolute left-[calc(50%-120px)] lg:left-[calc(50%-130px)] bottom-5 w-[175px] h-[350px] bg-navy-2 rounded-[30px] opacity-55 shadow-[0_20px_60px_rgba(13,21,38,0.3)] border-[8px] border-navy-3 z-1" />
          {/* Main phone */}
          <div className="relative z-2 w-53.75h-107.5 bg-navy-3 rounded-[36px] shadow-[0_30px_80px_rgba(13,21,38,0.35),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden border-10 border-navy-2">
            <div
              className="w-full h-full rounded-[26px] bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&q=80')",
              }}
            />
          </div>
          {/* Badge */}
          <div className="absolute top-[50px] right-[10px] lg:right-[40px] z-[3] bg-white rounded-[10px] p-[13px_15px] shadow-[0_12px_40px_rgba(13,21,38,0.18)] border-l-[3px] border-gold">
            <div className="text-[0.68rem] text-body-3">
              Live tracking active
            </div>
            <div className="text-[0.87rem] font-bold text-navy">
              Driver en route &#128663;
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Content */}
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold">
            <span className="w-7 h-0.5 bg-gold shrink-0" />
            Mobile App
          </div>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
            Download Our
            <br />
            <em className="italic text-gold">Mobile App</em>
          </h2>
          <div className="w-12 h-0.5 bg-linear-to-r from-gold to-transparent my-4.5" />
          <p className="text-base text-body-2 leading-7 max-w-145">
            Easily book, change, or cancel rides on the go. You are in command
            anywhere in the world — right from your phone.
          </p>

          <div className="flex flex-col gap-[13px] my-7">
            {APP_FEATURES.map((feat) => (
              <div key={feat} className="flex gap-3 items-center">
                <div className="w-[30px] h-[30px] rounded-full shrink-0 bg-gradient-to-br from-gold-2 to-gold flex items-center justify-center text-white text-[0.78rem] font-bold">
                  &#10003;
                </div>
                <span className="text-[0.9rem] text-body-2 font-medium">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-[11px] bg-navy text-white px-5 py-3 rounded-lg no-underline border-[1.5px] border-transparent hover:bg-gold transition-all"
            >
              <span className="text-[1.3rem]">&#127822;</span>
              <div>
                <div className="text-[0.63rem] text-white/60">
                  Download on the
                </div>
                <div className="text-[0.87rem] font-bold text-white">
                  App Store
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-[11px] bg-navy text-white px-5 py-3 rounded-lg no-underline border-[1.5px] border-transparent hover:bg-gold transition-all"
            >
              <span className="text-[1.3rem]">&#9654;</span>
              <div>
                <div className="text-[0.63rem] text-white/60">Get it on</div>
                <div className="text-[0.87rem] font-bold text-white">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
