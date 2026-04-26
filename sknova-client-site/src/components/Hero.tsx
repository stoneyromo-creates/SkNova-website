"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-purple-600/[0.12] blur-[130px] animate-float" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600/[0.10] blur-[120px] animate-float-reverse" />
        <div className="absolute top-[55%] right-[25%] w-[350px] h-[350px] rounded-full bg-purple-400/[0.07] blur-[100px] animate-glow-breathe" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-40 text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          Dallas-Based Web Design Studio
        </div>

        {/* Headline */}
        <h1
          className="font-syne font-bold text-5xl md:text-7xl lg:text-[5.25rem] text-white leading-[1.04] tracking-tight mb-7 animate-fade-in-up"
          style={{ animationDelay: "140ms" }}
        >
          Websites That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
            Convert
          </span>
          <br className="hidden sm:block" />
          {" "}&amp; Close
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "280ms" }}
        >
          We build premium, high-performance websites for small businesses and
          entrepreneurs who are serious about growing. No templates. No fluff.
          Just results.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "420ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-9 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 hover:border-white/20 text-white font-semibold px-9 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            View Pricing
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm animate-fade-in-up"
          style={{ animationDelay: "560ms" }}
        >
          {["Fast Delivery", "Mobile-First", "SEO Optimized", "Conversion Focused"].map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce animate-fade-in-up" style={{ animationDelay: "800ms" }}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
