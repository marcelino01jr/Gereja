"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/jadwal-misa", label: "Jadwal Misa" },
    { href: "/sakramen", label: "Sakramen" },
    { href: "/kegiatan", label: "Kegiatan" },
    { href: "/galeri", label: "Galeri" },
    { href: "/pengumuman", label: "Pengumuman" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/98 backdrop-blur-md shadow-lg border-b border-navy/5"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? "text-navy" : "text-cream"
            } hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-sm px-2 -ml-2`}
          >
            {siteConfig.shortName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:bg-gold/10 ${
                  isScrolled 
                    ? "text-navy hover:text-gold" 
                    : "text-cream hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? "text-navy hover:bg-navy/5" 
                : "text-cream hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-navy/95 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="relative bg-cream h-full w-full max-w-sm ml-auto shadow-2xl overflow-y-auto">
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif font-bold text-2xl text-navy">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-navy hover:text-gold transition-colors"
                  aria-label="Tutup menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-navy font-medium hover:bg-gold/10 hover:text-gold transition-all rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-navy/10">
                <p className="text-sm font-semibold text-navy mb-3">Hubungi Kami</p>
                <div className="space-y-2 text-sm text-navy/70">
                  <p>{siteConfig.contact.phone[0]}</p>
                  <p>{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
