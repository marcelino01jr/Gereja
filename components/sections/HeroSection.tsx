"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Hero Image - Large & Cinematic */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/gereja.jpeg"
            alt={siteConfig.name}
            fill
            priority
            className="object-cover"
            quality={95}
          />
          {/* Sophisticated overlay - not too dark, not too light */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>
      </div>

      {/* Content - Left aligned, editorial style */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Year badge - minimal */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-white/40"></div>
              <span className="text-white/80 text-sm font-light tracking-[0.3em] uppercase">
                Sejak {siteConfig.profile.establishedYear}
              </span>
            </div>

            {/* Main Heading - BOLD & IMPACTFUL */}
            <h1 className="mb-8 space-y-3">
              <div className="text-white/90 text-lg sm:text-xl font-light tracking-wide">
                Selamat Datang di
              </div>
              <div className="space-y-2">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.95] tracking-tight">
                  Gereja Katolik
                </div>
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight">
                  <span className="text-white">ST.</span>
                  <span className="text-amber-400 ml-3">Yoseph</span>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white/80 tracking-wide mt-4">
                  Balige, Toba Samosir
                </div>
              </div>
            </h1>

            {/* Tagline - Clean & Simple */}
            <p className="text-xl sm:text-2xl text-white/90 font-light mb-12 leading-relaxed max-w-2xl">
              Komunitas iman yang hangat dan penuh kasih, melayani dengan semangat Santo Yoseph
            </p>

            {/* CTA - Minimal & Elegant */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/jadwal-misa">
                <button className="group px-10 py-4 bg-white text-gray-900 font-medium rounded-none transition-all duration-300 hover:bg-amber-400 hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-3">
                    Jadwal Misa
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/tentang">
                <button className="group px-10 py-4 border-2 border-white/80 text-white font-medium rounded-none transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
                  Tentang Kami
                </button>
              </Link>
            </div>

            {/* Stats - Sophisticated */}
            <div className="flex flex-wrap gap-8 sm:gap-12">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">7.700+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Umat</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">29</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Lingkungan</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">89</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Tahun Melayani</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40">
        <div className="text-xs uppercase tracking-widest">Gulir</div>
        <div className="w-px h-16 bg-white/20 animate-pulse"></div>
      </div>
    </section>
  );
}
