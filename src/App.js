import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Ticket, Mic, Globe, Eye, Bus, Heart, Crown, QrCode,
  ArrowRight, ChevronDown, Star, MapPin, Calendar,
  Zap, Shield, Users, Menu, X, Mail, Phone, Instagram,
  Facebook, Twitter, Sparkles, Volume2, Accessibility
} from "lucide-react";

const COLORS = {
  navy: "#0A1628",
  navyLight: "#112240",
  blue: "#1E3A5F",
  orange: "#FF6B2B",
  orangeLight: "#FF8C5A",
  slate: "#8892A4",
  slateLight: "#B8C3D4",
  white: "#F0F4FF",
  cardBg: "#0D1E35",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

function Pill({ children }) {
  return (
    <motion.span variants={fadeUp} style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: "rgba(255,107,43,0.12)", border: "1px solid rgba(255,107,43,0.3)",
      color: COLORS.orange, borderRadius: 999, padding: "6px 16px",
      fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
      marginBottom: 20,
    }}>
      <Sparkles size={12} /> {children}
    </motion.span>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Funkcije", "Prednosti", "Događaji", "Kontakt"];

  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,22,40,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
        padding: "0 5%",
      }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Ticket size={18} color="white" />
          </div>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 800, color: COLORS.white }}>
            Moja<span style={{ color: COLORS.orange }}>Karta</span>
            <span style={{ color: COLORS.slate, fontSize: 16 }}>.ba</span>
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: COLORS.slateLight, textDecoration: "none", fontSize: 14, fontWeight: 500, fontFamily: "system-ui", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = COLORS.white}
              onMouseLeave={e => e.target.style.color = COLORS.slateLight}>
              {l}
            </a>
          ))}
          <button style={{
            background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`,
            color: "white", border: "none", borderRadius: 8, padding: "10px 22px",
            fontWeight: 700, fontSize: 13, cursor: "pointer", letterSpacing: "0.03em",
          }}>
            Kupi Kartu
          </button>
        </div>

        {/* Mobile menu */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: COLORS.white, cursor: "pointer", display: "none" }} className="mobile-menu-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(10,22,40,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
            <div style={{ padding: "20px 5%", display: "flex", flexDirection: "column", gap: 16 }}>
              {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ color: COLORS.slateLight, textDecoration: "none", fontSize: 16, padding: "8px 0" }}>{l}</a>)}
              <button style={{ background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, color: "white", border: "none", borderRadius: 8, padding: "12px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                Kupi Kartu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,58,95,0.8) 0%, ${COLORS.navy} 70%)`,
      padding: "120px 5% 80px", position: "relative", overflow: "hidden",
    }}>
      {/* Animated grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />

      {/* Glow orbs */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }}
        style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, background: `radial-gradient(circle, rgba(255,107,43,0.15), transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }}
        style={{ position: "absolute", bottom: "5%", left: "-10%", width: 600, height: 600, background: `radial-gradient(circle, rgba(30,58,95,0.5), transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
          {/* Left */}
          <motion.div style={{ y, opacity }}>
            <AnimatedSection>
              <Pill>Platforma #1 u BiH</Pill>
              <motion.h1 variants={fadeUp} style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(42px, 5.5vw, 72px)", fontWeight: 900,
                lineHeight: 1.05, color: COLORS.white, margin: "0 0 24px",
                letterSpacing: "-0.02em",
              }}>
                Vaše sjedište,<br />
                <span style={{ color: COLORS.orange }}>vaše iskustvo</span>
              </motion.h1>
              <motion.p variants={fadeUp} style={{ fontSize: 18, color: COLORS.slateLight, lineHeight: 1.75, marginBottom: 40, maxWidth: 480, fontFamily: "'DM Sans', system-ui" }}>
                Centralizovana prodaja karata, AI glasovne komande, 360° pogled sa sjedišta — sve na jednom mjestu. Za svakoga.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button style={{
                  background: `linear-gradient(135deg, ${COLORS.orange}, #FF8C5A)`,
                  color: "white", border: "none", borderRadius: 12, padding: "16px 32px",
                  fontWeight: 700, fontSize: 16, cursor: "pointer", display: "flex",
                  alignItems: "center", gap: 8, boxShadow: `0 8px 32px rgba(255,107,43,0.35)`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 16px 40px rgba(255,107,43,0.45)`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 32px rgba(255,107,43,0.35)`; }}>
                  Kupi Kartu <ArrowRight size={18} />
                </button>
                
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} style={{ display: "flex", gap: 40, marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[["50K+", "Korisnika"], ["200+", "Događaja"], ["99.9%", "Pouzdanost"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.orange, fontFamily: "'Playfair Display', serif" }}>{n}</div>
                    <div style={{ fontSize: 13, color: COLORS.slate, marginTop: 2, fontFamily: "'DM Sans', system-ui" }}>{l}</div>
                  </div>
                ))}
              </motion.div>
            </AnimatedSection>
          </motion.div>

          {/* Right — mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.85, rotateY: 15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", justifyContent: "center" }} className="hero-mockup">
            <div style={{ position: "relative", width: 340, height: 500 }}>
              {/* Phone mockup */}
              <div style={{
                width: 300, height: 500, background: COLORS.cardBg, borderRadius: 40,
                border: `1.5px solid rgba(255,255,255,0.08)`, overflow: "hidden",
                boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)`,
                position: "relative",
              }}>
                {/* Screen content */}
                <div style={{ background: `linear-gradient(160deg, ${COLORS.blue} 0%, ${COLORS.navy} 100%)`, height: 200, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  {/* Stadium seats illustration */}
                  {[...Array(6)].map((_, row) => (
                    <div key={row} style={{ position: "absolute", bottom: row * 28 + 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
                      {[...Array(8 - row)].map((_, seat) => (
                        <div key={seat} style={{
                          width: 28, height: 20, borderRadius: "6px 6px 0 0",
                          background: seat === 3 && row === 0 ? COLORS.orange : `rgba(255,255,255,${0.06 + row * 0.03})`,
                          border: `1px solid rgba(255,255,255,0.08)`,
                        }} />
                      ))}
                    </div>
                  ))}
                  <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,107,43,0.2)", borderRadius: 8, padding: "4px 10px", fontSize: 11, color: COLORS.orange, fontWeight: 700, border: "1px solid rgba(255,107,43,0.3)" }}>
                    360° POGLED
                  </div>
                </div>

                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 11, color: COLORS.slate, fontFamily: "'DM Sans', system-ui", marginBottom: 4 }}>PETAK, 28. JUN 2025</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.white, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>FK Sarajevo — Željezničar</div>
                  <div style={{ fontSize: 13, color: COLORS.slate, display: "flex", alignItems: "center", gap: 4, marginBottom: 20 }}><MapPin size={12} /> Olimpijski stadion Koševo</div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                    {[["Sektor", "B-12"], ["Sjedište", "Br. 47"], ["Red", "14"], ["Cijena", "25 KM"]].map(([k, v]) => (
                      <div key={k} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "10px 12px" }}>
                        <div style={{ fontSize: 10, color: COLORS.slate, marginBottom: 2 }}>{k}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.white }}>{v}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, borderRadius: 12, padding: "12px", textAlign: "center", color: "white", fontWeight: 700, fontSize: 14 }}>
                    Kupi Kartu
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: 40, right: -20, background: COLORS.cardBg, borderRadius: 14, padding: "10px 14px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 40px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, background: "rgba(255,107,43,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <QrCode size={16} color={COLORS.orange} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.white }}>QR Skeniranje</div>
                  <div style={{ fontSize: 10, color: COLORS.slate }}>Trenutni ulaz</div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", bottom: 60, right: -30, background: "rgba(30,58,95,0.9)", borderRadius: 14, padding: "10px 14px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 40px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, background: "rgba(255,107,43,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mic size={16} color={COLORS.orange} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.white }}>AI Glasovne</div>
                  <div style={{ fontSize: 10, color: COLORS.slate }}>Komande aktivne</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: COLORS.slate, cursor: "pointer" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Sans', system-ui" }}>Skrolaj</span>
        <ChevronDown size={18} />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-mockup { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: <Mic size={22} />, title: "AI Glasovne Komande", desc: "Pristup za svakoga. Naša AI prepoznaje glas na bosanskom, engleskom i više od 12 jezika. Posebno dizajnirano za osobe s invaliditetom.", tag: "Inkluzivno", color: "#FF6B2B" },
    { icon: <Eye size={22} />, title: "360° Pogled sa Sjedišta", desc: "Virtualno prođite kroz arenu i odaberite savršeno sjedište. Vidite tačno šta ćete gledati prije nego kupite kartu.", tag: "3D Vizualizacija", color: "#2D9CDB" },
    { icon: <Globe size={22} />, title: "Višejezična Podrška", desc: "Platforma dostupna na bosanskom, srpskom, hrvatskom, engleskom i još 8 jezika. Bez barijera, bez granica.", tag: "Pristupačnost", color: "#27AE60" },
    { icon: <QrCode size={22} />, title: "Instant QR Ulaz", desc: "Zaboravite na fizičke karte. Skenirajte QR kod direktno s telefona. Ulaz za manje od 3 sekunde.", tag: "Pametni Ulaz", color: "#9B51E0" },
    { icon: <Shield size={22} />, title: "Sigurna Kupovina", desc: "256-bit SSL enkripcija. Vaši podaci su potpuno zaštićeni. Povrat novca garantovan unutar 48 sati.", tag: "Zaštita", color: "#EB5757" },
    { icon: <Zap size={22} />, title: "Rezervacija u Sekundi", desc: "Napredni sistem koji sprečava dvostruku prodaju. Vaše sjedište je rezervisano u realnom vremenu.", tag: "Brzina", color: "#F2994A" },
  ];

  return (
    <section id="funkcije" style={{ background: COLORS.navy, padding: "100px 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,43,0.3), transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 72 }}>
            <Pill>Tehnologija Budućnosti</Pill>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: COLORS.white, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
              Zašto odabrati <span style={{ color: COLORS.orange }}>MojaKarta</span>?
            </h2>
            <p style={{ fontSize: 17, color: COLORS.slate, maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontFamily: "'DM Sans', system-ui" }}>
              Šest razloga zašto smo najpametnija platforma za karte u regiji.
            </p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="features-grid">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{
                  background: COLORS.cardBg, borderRadius: 20, padding: 28,
                  border: "1px solid rgba(255,255,255,0.05)", cursor: "default",
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
                whileHover={{ y: -6, boxShadow: `0 20px 60px rgba(0,0,0,0.4)` }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${f.color}30`}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, background: `${f.color}18`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: f.color }}>
                    {f.icon}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: f.color, background: `${f.color}15`, borderRadius: 999, padding: "4px 10px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{f.tag}</span>
                </div>
                <h3 style={{ fontFamily: "'DM Sans', system-ui", fontWeight: 700, fontSize: 17, color: COLORS.white, margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.7, margin: 0, fontFamily: "'DM Sans', system-ui" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── 360 SECTION ─────────────────────────────────────────────────────────────
function View360() {
  const [activeAngle, setActiveAngle] = useState(45);

  return (
    <section style={{ background: `linear-gradient(135deg, ${COLORS.navyLight}, ${COLORS.navy})`, padding: "100px 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,107,43,0.06) 0%, transparent 60%)", zIndex: 0 }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="view360-grid">
          {/* Stadium visualization */}
          <AnimatedSection>
            <motion.div variants={fadeUp} style={{ position: "relative" }}>
              <div style={{ background: COLORS.cardBg, borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                {/* Stadium SVG view */}
                <div style={{ height: 320, background: `linear-gradient(180deg, #0D1B2E 0%, #1a3a5c 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <svg viewBox="0 0 400 280" style={{ width: "100%", height: "100%", position: "absolute" }}>
                    {/* Field */}
                    <ellipse cx="200" cy="180" rx="180" ry="100" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                    <ellipse cx="200" cy="180" rx="130" ry="70" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    {/* Seats rows */}
                    {[...Array(8)].map((_, i) => (
                      <ellipse key={i} cx="200" cy={185 + i * 10} rx={182 + i * 8} ry={102 + i * 7}
                        fill="none" stroke={`rgba(255,255,255,${0.04 - i * 0.003})`} strokeWidth={12}
                        strokeDasharray="3 2" />
                    ))}
                    {/* Highlighted seat */}
                    <circle cx={200 + Math.cos(activeAngle * Math.PI / 180) * 60} cy={180 + Math.sin(activeAngle * Math.PI / 180) * 35} r="6" fill={COLORS.orange} opacity="0.9" />
                    <circle cx={200 + Math.cos(activeAngle * Math.PI / 180) * 60} cy={180 + Math.sin(activeAngle * Math.PI / 180) * 35} r="12" fill={COLORS.orange} opacity="0.2" />
                    {/* Pitch markings */}
                    <line x1="200" y1="130" x2="200" y2="230" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <circle cx="200" cy="180" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  </svg>
                  <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,0.5)", borderRadius: 10, padding: "6px 12px", fontSize: 12, color: COLORS.orange, fontWeight: 700, backdropFilter: "blur(10px)" }}>
                    OLIMPIJSKI STADION KOŠEVO
                  </div>
                  <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.5)", borderRadius: 10, padding: "6px 12px", fontSize: 11, color: COLORS.slateLight, backdropFilter: "blur(10px)", display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.orange }} />
                    Vaše sjedište
                  </div>
                </div>
                {/* Angle slider */}
                <div style={{ padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: COLORS.slate, fontFamily: "'DM Sans', system-ui" }}>Ugao pogleda</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.orange }}>{activeAngle}°</span>
                  </div>
                  <input type="range" min="0" max="360" value={activeAngle} onChange={e => setActiveAngle(+e.target.value)}
                    style={{ width: "100%", accentColor: COLORS.orange, cursor: "pointer" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                    {["N", "I", "J", "Z"].map(d => <span key={d} style={{ fontSize: 11, color: COLORS.slate }}>{d}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection>
            <Pill>360° Vizualizacija</Pill>
            <motion.h2 variants={fadeUp} style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: COLORS.white, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
              Znaj šta kupuješ<br /><span style={{ color: COLORS.orange }}>prije nego platiš</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: 16, color: COLORS.slate, lineHeight: 1.8, marginBottom: 32, fontFamily: "'DM Sans', system-ui" }}>
              Interaktivni 3D prikaz stadiona omogućava da virtuelno sjednete na svako dostupno mjesta i vidite tačan ugao pogleda na teren. Kraj iznenađenja — samo savršen doživljaj.
            </motion.p>
            {[["Realno iskustvo", "Tačan prikaz iz vašeg sjedišta"], ["Dostupnost", "Provjera pristupa za invalidska kolica"], ["Preporuka AI", "Sistem preporučuje sjedišta po vašim željama"]].map(([t, d]) => (
              <motion.div key={t} variants={fadeUp} style={{ display: "flex", gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 36, minWidth: 36, background: "rgba(255,107,43,0.12)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Star size={15} color={COLORS.orange} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.white, fontFamily: "'DM Sans', system-ui" }}>{t}</div>
                  <div style={{ fontSize: 13, color: COLORS.slate, marginTop: 2, fontFamily: "'DM Sans', system-ui" }}>{d}</div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .view360-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// ─── BENEFITS ─────────────────────────────────────────────────────────────────
function Benefits() {
  const cards = [
    {
      icon: <Bus size={28} />, title: "Besplatan Gradski Prevoz",
      desc: "Svaka kupljena karta uključuje besplatan povratni prevoz GRAS-om na dan događaja. Bez stresa, bez parkinga.",
      color: "#2D9CDB", badge: "UKLJUČENO",
    },
    {
      icon: <Heart size={28} />, title: "Donacija Humanitarnim Org.",
      desc: "1% od svake prodane karte ide direktno u fond za pomoć djeci u Bosni i Hercegovini. Kultura koja mijenja živote.",
      color: "#EB5757", badge: "1% DONACIJA",
    },
    {
      icon: <Crown size={28} />, title: "VIP Propusnice",
      desc: "Ekskluzivan pristup VIP zonama, privatnim ložama i posebnim događajima. Vaše iskustvo, vaša pravila.",
      color: "#F2C94C", badge: "PREMIUM",
    },
    {
      icon: <Accessibility size={28} />, title: "Pristup za Sve",
      desc: "Specijalna sjedišta za osobe s invaliditetom, AI pomoćnik, i prilagođene staze pristupa na svim lokacijama.",
      color: "#27AE60", badge: "INKLUZIVNO",
    },
  ];

  return (
    <section id="prednosti" style={{ background: COLORS.navy, padding: "100px 5%" }}>
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(30,58,95,0.8), transparent)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 72 }}>
            <Pill>Više Od Karte</Pill>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: COLORS.white, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
              Prednosti koje <span style={{ color: COLORS.orange }}>volite</span>
            </h2>
            <p style={{ fontSize: 17, color: COLORS.slate, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontFamily: "'DM Sans', system-ui" }}>
              MojaKarta nije samo karta — to je kompletan doživljaj s beneficijama koje nadmašuju vaša očekivanja.
            </p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="benefits-grid">
            {cards.map((c, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02 }}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.cardBg}, ${COLORS.navyLight})`,
                  borderRadius: 24, padding: 36, border: `1px solid ${c.color}20`,
                  position: "relative", overflow: "hidden", cursor: "default",
                  boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
                }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, background: `radial-gradient(circle at 100% 0%, ${c.color}18, transparent 70%)`, borderRadius: "0 24px 0 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 58, height: 58, background: `${c.color}18`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: c.color }}>
                    {c.icon}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 800, color: c.color, background: `${c.color}15`, borderRadius: 999, padding: "5px 12px", letterSpacing: "0.08em", border: `1px solid ${c.color}30` }}>{c.badge}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: COLORS.white, margin: "0 0 12px" }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.75, margin: 0, fontFamily: "'DM Sans', system-ui" }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <style>{`
        @media (max-width: 768px) { .benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── EVENTS ──────────────────────────────────────────────────────────────────
function Events() {
  const events = [
    { name: "FK Sarajevo — Željezničar", category: "Fudbal", date: "28. Jun 2025", venue: "Olimp. Stadion Koševo", price: "25 KM", seats: "1,240 slobodnih", color: "#27AE60", emoji: "⚽" },
    { name: "Dino Merlin — Povratak", category: "Koncert", date: "12. Jul 2025", venue: "Zetra, Sarajevo", price: "45 KM", seats: "842 slobodnih", color: "#9B51E0", emoji: "🎤" },
    { name: "Elitna Košarka — Finale", category: "Košarka", date: "19. Jul 2025", venue: "KSC Skenderija", price: "18 KM", seats: "320 slobodnih", color: "#F2994A", emoji: "🏀" },
    { name: "Rock Festival — Mostar", category: "Festival", date: "2. Aug 2025", venue: "Lučki Most, Mostar", price: "35 KM", seats: "2,100 slobodnih", color: "#EB5757", emoji: "🎸" },
    { name: "Cirque du Soleil", category: "Predstava", date: "15. Aug 2025", venue: "BBI Centar, Sarajevo", price: "60 KM", seats: "540 slobodnih", color: "#2D9CDB", emoji: "🎪" },
    { name: "ATP Tenis — Banja Luka", category: "Tenis", date: "28. Aug 2025", venue: "Arena Banja Luka", price: "22 KM", seats: "710 slobodnih", color: "#F2C94C", emoji: "🎾" },
  ];

  return (
    <section id="događaji" style={{ background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`, padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
            <div>
              <Pill>Predstojeći Događaji</Pill>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: COLORS.white, margin: 0, letterSpacing: "-0.02em" }}>
                Ne propusti ništa
              </h2>
            </div>
            <button style={{ background: "transparent", color: COLORS.orange, border: `1.5px solid ${COLORS.orange}40`, borderRadius: 10, padding: "10px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = `${COLORS.orange}12`; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
              Svi događaji <ArrowRight size={16} />
            </button>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
            {events.map((ev, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
                style={{
                  background: COLORS.cardBg, borderRadius: 20, overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)", cursor: "pointer",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4)`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                {/* Card header */}
                <div style={{ height: 100, background: `linear-gradient(135deg, ${ev.color}22, ${ev.color}08)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative", borderBottom: `1px solid ${ev.color}20` }}>
                  {ev.emoji}
                  <span style={{ position: "absolute", top: 12, right: 12, fontSize: 10, fontWeight: 700, color: ev.color, background: `${ev.color}18`, borderRadius: 999, padding: "4px 10px", border: `1px solid ${ev.color}30` }}>
                    {ev.category.toUpperCase()}
                  </span>
                </div>

                <div style={{ padding: 20 }}>
                  <h3 style={{ fontFamily: "'DM Sans', system-ui", fontWeight: 700, fontSize: 16, color: COLORS.white, margin: "0 0 12px", lineHeight: 1.3 }}>{ev.name}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.slate }}>
                      <Calendar size={13} color={ev.color} /> {ev.date}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.slate }}>
                      <MapPin size={13} color={ev.color} /> {ev.venue}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.slate }}>
                      <Users size={13} color={ev.color} /> {ev.seats}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 10, color: COLORS.slate, marginBottom: 2 }}>OD</div>
                      <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.orange, fontFamily: "'Playfair Display', serif" }}>{ev.price}</div>
                    </div>
                    <button style={{
                      background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`,
                      color: "white", border: "none", borderRadius: 10, padding: "10px 18px",
                      fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "opacity 0.2s",
                      display: "flex", alignItems: "center", gap: 6,
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                      <Ticket size={14} /> Kupi
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <style>{`
        @media (max-width: 1024px) { .events-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .events-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── AI SECTION ──────────────────────────────────────────────────────────────
function AISection() {
  const [active, setActive] = useState(null);
  const commands = [
    "\"Kupi dvije karte za petak\"",
    "\"Koji koncerti su ove sedmice?\"",
    "\"Rezerviši VIP lođu za sljedeću utakmicu\"",
    "\"Pokaži sjedišta za invalide\"",
  ];

  return (
    <section style={{ background: COLORS.navyLight, padding: "100px 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255,107,43,0.06), transparent)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="ai-grid">
          <AnimatedSection>
            <Pill>AI Asistent</Pill>
            <motion.h2 variants={fadeUp} style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: COLORS.white, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
              Samo <span style={{ color: COLORS.orange }}>recite</span> što trebate
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: 16, color: COLORS.slate, lineHeight: 1.8, marginBottom: 32, fontFamily: "'DM Sans', system-ui" }}>
              Naš AI razumije prirodni govor na bosanskom jeziku. Posebno dizajnirano za osobe s invaliditetom i starije korisnike — bez komplikacija, samo razgovor.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              {["Bosanski", "Engleski", "Njemački", "+9 jezika"].map(lang => (
                <span key={lang} style={{ padding: "6px 14px", background: "rgba(255,255,255,0.05)", borderRadius: 999, fontSize: 13, color: COLORS.slateLight, border: "1px solid rgba(255,255,255,0.08)" }}>{lang}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, alignItems: "center", padding: 16, background: "rgba(255,107,43,0.08)", borderRadius: 14, border: "1px solid rgba(255,107,43,0.2)" }}>
              <Accessibility size={20} color={COLORS.orange} />
              <span style={{ fontSize: 14, color: COLORS.slateLight, fontFamily: "'DM Sans', system-ui" }}>Certifikovano za pristupačnost — WCAG 2.1 AAA standard</span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeUp}>
              {/* Voice UI mockup */}
              <div style={{ background: COLORS.cardBg, borderRadius: 24, padding: 28, border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 32px 64px rgba(0,0,0,0.4)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <motion.div animate={{ scale: [1, 1.2, 1], boxShadow: [`0 0 0 0 rgba(255,107,43,0.4)`, `0 0 0 12px rgba(255,107,43,0)`, `0 0 0 0 rgba(255,107,43,0)`] }} transition={{ duration: 2, repeat: Infinity }}
                    style={{ width: 48, height: 48, background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mic size={20} color="white" />
                  </motion.div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.white }}>AI Asistent aktivan</div>
                    <div style={{ fontSize: 12, color: COLORS.slate }}>Slušam vaš glas...</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 3 }}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div key={i} animate={{ height: [8, 24, 8] }} transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
                        style={{ width: 3, background: COLORS.orange, borderRadius: 2 }} />
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, color: COLORS.slate, marginBottom: 10, fontFamily: "'DM Sans', system-ui" }}>PRIMJERI GLASOVNIH KOMANDI:</div>
                  {commands.map((cmd, i) => (
                    <motion.div key={i} onClick={() => setActive(i)}
                      whileHover={{ x: 4 }}
                      style={{
                        padding: "12px 16px", borderRadius: 12, marginBottom: 8, cursor: "pointer",
                        background: active === i ? "rgba(255,107,43,0.1)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${active === i ? "rgba(255,107,43,0.3)" : "rgba(255,255,255,0.05)"}`,
                        fontSize: 14, color: active === i ? COLORS.orange : COLORS.slateLight,
                        fontFamily: "'DM Sans', system-ui", transition: "all 0.2s",
                        display: "flex", alignItems: "center", gap: 10,
                      }}>
                      <Volume2 size={14} color={active === i ? COLORS.orange : COLORS.slate} />
                      {cmd}
                    </motion.div>
                  ))}
                </div>

                {active !== null && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ padding: 16, background: "rgba(39,174,96,0.1)", borderRadius: 12, border: "1px solid rgba(39,174,96,0.2)", fontSize: 14, color: "#27AE60", fontFamily: "'DM Sans', system-ui" }}>
                    ✓ Komanda razumljena. Obrađujem vaš zahtjev...
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .ai-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="kontakt" style={{ background: "#060F1C", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 5% 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Ticket size={20} color="white" />
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: COLORS.white }}>
                Moja<span style={{ color: COLORS.orange }}>Karta</span><span style={{ color: COLORS.slate, fontSize: 18 }}>.ba</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: COLORS.slate, lineHeight: 1.8, marginBottom: 24, maxWidth: 280, fontFamily: "'DM Sans', system-ui" }}>
              Platforma za centralizovanu prodaju karata u Bosni i Hercegovini. Pametnija kupovina, bolji doživljaj.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button key={i} style={{ width: 36, height: 36, background: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = `rgba(255,107,43,0.15)`; e.currentTarget.style.borderColor = `rgba(255,107,43,0.3)`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                  <Icon size={16} color={COLORS.slate} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Platforma", links: ["Kako radi", "Sigurnost", "Cijene", "API za partnere"] },
            { title: "Podrška", links: ["Pomoć", "Kontakt", "Povrat novca", "Uvjeti korišćenja"] },
            { title: "Kompanija", links: ["O nama", "Karijere", "Press", "Blog"] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: COLORS.white, marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'DM Sans', system-ui" }}>{col.title}</h4>
              {col.links.map(l => (
                <button key={l} onClick={() => {}} style={{ display: "block", fontSize: 14, color: COLORS.slate, background: "none", border: "none", padding: 0, marginBottom: 10, fontFamily: "'DM Sans', system-ui", transition: "color 0.2s", cursor: "pointer", textAlign: "left" }}
                  onMouseEnter={e => e.target.style.color = COLORS.white}
                  onMouseLeave={e => e.target.style.color = COLORS.slate}>
                  {l}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ background: COLORS.cardBg, borderRadius: 20, padding: "32px 36px", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, marginBottom: 48, flexWrap: "wrap" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: COLORS.white, margin: "0 0 6px" }}>Ostanite obavješteni</h3>
            <p style={{ fontSize: 14, color: COLORS.slate, margin: 0, fontFamily: "'DM Sans', system-ui" }}>Novi događaji, popusti i ekskluzivne ponude direktno na vašu adresu.</p>
          </div>
          <div style={{ display: "flex", gap: 10, flex: "0 0 auto" }}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="vasa@email.ba"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 18px", color: COLORS.white, fontSize: 14, fontFamily: "'DM Sans', system-ui", outline: "none", width: 240 }} />
            <button style={{ background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, color: "white", border: "none", borderRadius: 10, padding: "12px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <Mail size={15} /> Pretplati se
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.05)", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: COLORS.slate, fontFamily: "'DM Sans', system-ui" }}>© 2025 MojaKarta.ba · Sva prava zadržana</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 13, color: COLORS.slate, fontFamily: "'DM Sans', system-ui" }}>
            <Phone size={13} />
            <span>+387 33 000 000</span>
            <span style={{ margin: "0 6px" }}>·</span>
            <Mail size={13} />
            <span>info@mojkarta.ba</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: COLORS.navy, minHeight: "100vh", fontFamily: "'DM Sans', system-ui" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.navy}; }
        input::placeholder { color: ${COLORS.slate}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.navy}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.blue}; border-radius: 3px; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navbar />
      <Hero />
      <Features />
      <View360 />
      <AISection />
      <Benefits />
      <Events />
      <Footer />
    </div>
  );
}