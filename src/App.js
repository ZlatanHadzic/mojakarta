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

// ─── CHECKOUT MODAL ──────────────────────────────────────────────────────────
const DEFAULT_EVENT = {
  name: "FK Sarajevo — Željezničar", category: "Fudbal", date: "28. Jun 2025",
  venue: "Olimp. Stadion Koševo", price: "25 KM", basePrice: 25, emoji: "⚽", color: "#27AE60",
};

function CheckoutModal({ event, onClose }) {
  const [step, setStep] = useState(1); // 1=odabir, 2=podaci, 3=plaćanje, 4=potvrda
  const [qty, setQty] = useState(1);
  const [seat, setSeat] = useState("B-12 / Red 14 / Br. 47");
  const [form, setForm] = useState({ ime: "", prezime: "", email: "", telefon: "" });
  const [card, setCard] = useState({ broj: "", datum: "", cvv: "", ime: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const ev = event || DEFAULT_EVENT;
  const base = ev.basePrice || 25;
  const ukupno = (base * qty + 1.5).toFixed(2);
  const qrCode = `MK-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  const seats = ["A-5 / Red 3 / Br. 12", "B-12 / Red 14 / Br. 47", "C-8 / Red 7 / Br. 23", "D-1 / Red 2 / Br. 4 (VIP)", "E-3 / Red 1 / Br. 8 (Pristup)"];

  const validateStep2 = () => {
    const e = {};
    if (!form.ime.trim()) e.ime = "Obavezno polje";
    if (!form.prezime.trim()) e.prezime = "Obavezno polje";
    if (!form.email.includes("@")) e.email = "Neispravna email adresa";
    if (form.telefon && !/^[\d\s+\-()]{6,}$/.test(form.telefon)) e.telefon = "Neispravan format";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e = {};
    if (card.broj.replace(/\s/g, "").length < 16) e.broj = "Unesite 16 cifara";
    if (!card.datum.match(/^\d{2}\/\d{2}$/)) e.datum = "Format: MM/GG";
    if (card.cvv.length < 3) e.cvv = "3 cifre";
    if (!card.ime.trim()) e.ime = "Obavezno polje";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 2 && !validateStep2()) return;
    if (step === 3) {
      if (!validateStep3()) return;
      setLoading(true);
      setTimeout(() => { setLoading(false); setStep(4); }, 2200);
      return;
    }
    setErrors({});
    setStep(s => s + 1);
  };

  const fmtCard = v => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtDate = v => { const d = v.replace(/\D/g, "").slice(0, 4); return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d; };

  const inp = (label, val, onChange, placeholder, err, type = "text") => (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: COLORS.slateLight, marginBottom: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</label>
      <input type={type} value={val} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: "100%", background: err ? "rgba(235,87,87,0.08)" : "rgba(255,255,255,0.05)", border: `1px solid ${err ? "rgba(235,87,87,0.5)" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, padding: "12px 16px", color: COLORS.white, fontSize: 14, fontFamily: "'DM Sans', system-ui", outline: "none", transition: "border-color 0.2s" }}
        onFocus={e => e.target.style.borderColor = COLORS.orange}
        onBlur={e => e.target.style.borderColor = err ? "rgba(235,87,87,0.5)" : "rgba(255,255,255,0.1)"} />
      {err && <div style={{ fontSize: 11, color: "#EB5757", marginTop: 4 }}>{err}</div>}
    </div>
  );

  const steps = ["Odabir", "Podaci", "Plaćanje", "Potvrda"];

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={e => e.target === e.currentTarget && onClose()}
        style={{ position: "fixed", inset: 0, background: "rgba(6,15,28,0.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backdropFilter: "blur(12px)" }}>

        <motion.div initial={{ scale: 0.88, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          style={{ background: COLORS.cardBg, borderRadius: 28, width: "100%", maxWidth: 560, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 100px rgba(0,0,0,0.7)", overflow: "hidden", maxHeight: "90vh", overflowY: "auto" }}>

          {/* Header */}
          <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Ticket size={18} color="white" />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.white, fontFamily: "'DM Sans', system-ui" }}>Kupovina Karte</div>
                <div style={{ fontSize: 12, color: COLORS.slate }}>MojaKarta.ba · Sigurna transakcija 🔒</div>
              </div>
            </div>
            <button onClick={onClose} style={{ background: "rgba(255,255,255,0.07)", border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: COLORS.slate, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = COLORS.white; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = COLORS.slate; }}>
              <X size={18} />
            </button>
          </div>

          {/* Step progress */}
          {step < 4 && (
            <div style={{ padding: "16px 28px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                {steps.slice(0, 3).map((s, i) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: step > i + 1 ? COLORS.orange : step === i + 1 ? COLORS.orange : "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: step >= i + 1 ? "white" : COLORS.slate, transition: "all 0.3s", flexShrink: 0 }}>
                        {step > i + 1 ? "✓" : i + 1}
                      </div>
                      <span style={{ fontSize: 12, color: step === i + 1 ? COLORS.white : COLORS.slate, fontWeight: step === i + 1 ? 600 : 400 }}>{s}</span>
                    </div>
                    {i < 2 && <div style={{ flex: 1, height: 1, background: step > i + 1 ? COLORS.orange : "rgba(255,255,255,0.08)", margin: "0 10px", transition: "background 0.4s" }} />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Event summary bar */}
          {step < 4 && (
            <div style={{ margin: "20px 28px", background: `linear-gradient(135deg, ${ev.color}15, ${ev.color}06)`, border: `1px solid ${ev.color}25`, borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 28 }}>{ev.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.white, fontFamily: "'DM Sans', system-ui" }}>{ev.name}</div>
                <div style={{ fontSize: 12, color: COLORS.slate, marginTop: 2 }}>{ev.date} · {ev.venue}</div>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: COLORS.orange, fontFamily: "'Playfair Display', serif" }}>{ev.price}</div>
            </div>
          )}

          <div style={{ padding: "0 28px 28px" }}>

            {/* STEP 1 — Odabir sjedišta */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: COLORS.slateLight, marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>Broj Karata</label>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    {[1, 2, 3, 4, 5].map(n => (
                      <button key={n} onClick={() => setQty(n)}
                        style={{ width: 44, height: 44, borderRadius: 10, border: `1.5px solid ${qty === n ? COLORS.orange : "rgba(255,255,255,0.1)"}`, background: qty === n ? `rgba(255,107,43,0.15)` : "rgba(255,255,255,0.04)", color: qty === n ? COLORS.orange : COLORS.slateLight, fontWeight: 700, fontSize: 16, cursor: "pointer", transition: "all 0.2s" }}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: COLORS.slateLight, marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>Odaberite Sjedište</label>
                  {seats.map(s => (
                    <button key={s} onClick={() => setSeat(s)}
                      style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", marginBottom: 8, background: seat === s ? "rgba(255,107,43,0.1)" : "rgba(255,255,255,0.03)", border: `1px solid ${seat === s ? "rgba(255,107,43,0.4)" : "rgba(255,255,255,0.07)"}`, borderRadius: 12, cursor: "pointer", transition: "all 0.2s" }}>
                      <span style={{ fontSize: 14, color: seat === s ? COLORS.orange : COLORS.slateLight, fontWeight: seat === s ? 600 : 400 }}>{s}</span>
                      {seat === s && <span style={{ fontSize: 12, color: COLORS.orange }}>✓ Odabrano</span>}
                    </button>
                  ))}
                </div>

                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 16, marginBottom: 20 }}>
                  {[["Karte", `${qty} × ${ev.price}`], ["Naknada servisa", "1,50 KM"], ["Gradski prevoz", "Besplatno 🎁"]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14 }}>
                      <span style={{ color: COLORS.slate }}>{k}</span>
                      <span style={{ color: k === "Gradski prevoz" ? "#27AE60" : COLORS.white, fontWeight: 500 }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "10px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 800 }}>
                    <span style={{ color: COLORS.white }}>Ukupno</span>
                    <span style={{ color: COLORS.orange }}>{ukupno} KM</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Lični podaci */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>{inp("Ime", form.ime, v => setForm(f => ({ ...f, ime: v })), "Vaše ime", errors.ime)}</div>
                  <div>{inp("Prezime", form.prezime, v => setForm(f => ({ ...f, prezime: v })), "Vaše prezime", errors.prezime)}</div>
                </div>
                {inp("Email adresa", form.email, v => setForm(f => ({ ...f, email: v })), "vasa@email.ba", errors.email, "email")}
                {inp("Telefon (opciono)", form.telefon, v => setForm(f => ({ ...f, telefon: v })), "+387 61 000 000", errors.telefon, "tel")}
                <div style={{ background: "rgba(255,107,43,0.07)", border: "1px solid rgba(255,107,43,0.2)", borderRadius: 12, padding: 14, fontSize: 13, color: COLORS.slateLight, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16 }}>📧</span>
                  <span>QR karta bit će poslana na vašu email adresu odmah nakon kupovine.</span>
                </div>
              </motion.div>
            )}

            {/* STEP 3 — Plaćanje */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                  {["💳 Kartica", "📱 PayPal", "🏦 Banka"].map((m, i) => (
                    <button key={m} onClick={() => {}}
                      style={{ flex: 1, padding: "10px 8px", background: i === 0 ? "rgba(255,107,43,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${i === 0 ? "rgba(255,107,43,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: 10, color: i === 0 ? COLORS.orange : COLORS.slate, fontSize: 12, fontWeight: i === 0 ? 700 : 400, cursor: "pointer" }}>
                      {m}
                    </button>
                  ))}
                </div>

                {inp("Broj kartice", card.broj, v => setCard(c => ({ ...c, broj: fmtCard(v) })), "1234 5678 9012 3456", errors.broj)}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>{inp("Datum isteka", card.datum, v => setCard(c => ({ ...c, datum: fmtDate(v) })), "MM/GG", errors.datum)}</div>
                  <div>{inp("CVV", card.cvv, v => setCard(c => ({ ...c, cvv: v.replace(/\D/g, "").slice(0, 3) })), "123", errors.cvv)}</div>
                </div>
                {inp("Ime na kartici", card.ime, v => setCard(c => ({ ...c, ime: v })), "VAŠE IME PREZIME", errors.ime)}

                <div style={{ background: "rgba(39,174,96,0.08)", border: "1px solid rgba(39,174,96,0.2)", borderRadius: 12, padding: 14, fontSize: 13, color: "#6FCF97", display: "flex", gap: 10, alignItems: "center", marginTop: 4 }}>
                  <Shield size={16} color="#27AE60" />
                  <span>256-bit SSL enkripcija · Podaci su potpuno sigurni</span>
                </div>

                <div style={{ marginTop: 16, background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 800 }}>
                    <span style={{ color: COLORS.slateLight }}>Iznos za naplatu:</span>
                    <span style={{ color: COLORS.orange }}>{ukupno} KM</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4 — Potvrda */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "10px 0 10px" }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2, damping: 15 }}
                  style={{ width: 80, height: 80, background: "linear-gradient(135deg, #27AE60, #6FCF97)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 36 }}>
                  ✓
                </motion.div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: COLORS.white, marginBottom: 8 }}>Kupovina uspješna!</h3>
                <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
                  Vaša karta je rezervisana. QR kod poslan na <strong style={{ color: COLORS.slateLight }}>{form.email || "vašu email adresu"}</strong>.
                </p>

                {/* QR placeholder */}
                <div style={{ background: "white", borderRadius: 16, padding: 20, display: "inline-block", marginBottom: 20 }}>
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    {/* QR pattern */}
                    {[...Array(8)].map((_, r) => [...Array(8)].map((_, c) => {
                      const fill = ((r + c + r * c) % 3 === 0 || (r < 3 && c < 3) || (r < 3 && c > 4) || (r > 4 && c < 3)) ? "#0A1628" : "white";
                      return <rect key={`${r}-${c}`} x={c * 14 + 4} y={r * 14 + 4} width={12} height={12} rx={2} fill={fill} />;
                    }))}
                  </svg>
                  <div style={{ fontSize: 12, color: COLORS.navy, fontWeight: 700, marginTop: 8, letterSpacing: "0.1em" }}>{qrCode}</div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 16, textAlign: "left", marginBottom: 20 }}>
                  {[["Događaj", ev.name], ["Datum", ev.date], ["Venue", ev.venue], ["Sjedište", seat], ["Karte", `${qty}x`], ["Ukupno plaćeno", `${ukupno} KM`]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13 }}>
                      <span style={{ color: COLORS.slate }}>{k}</span>
                      <span style={{ color: COLORS.white, fontWeight: 500 }}>{v}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: "rgba(45,156,219,0.1)", border: "1px solid rgba(45,156,219,0.25)", borderRadius: 12, padding: 12, fontSize: 13, color: "#56B4D3", marginBottom: 20 }}>
                  🚌 Besplatan gradski prevoz (GRAS) na dan događaja uključen!
                </div>

                <button onClick={onClose}
                  style={{ width: "100%", background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, color: "white", border: "none", borderRadius: 12, padding: "14px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                  Zatvori · Uživajte u događaju! 🎉
                </button>
              </motion.div>
            )}

            {/* Navigation buttons */}
            {step < 4 && (
              <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                {step > 1 && (
                  <button onClick={() => { setStep(s => s - 1); setErrors({}); }}
                    style={{ flex: 1, padding: "13px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: COLORS.slateLight, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                    ← Nazad
                  </button>
                )}
                <button onClick={handleNext} disabled={loading}
                  style={{ flex: 2, padding: "13px", background: loading ? "rgba(255,107,43,0.5)" : `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, border: "none", borderRadius: 12, color: "white", fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.2s" }}>
                  {loading ? (
                    <><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ display: "inline-block" }}>⟳</motion.span> Obrađujem plaćanje...</>
                  ) : step === 3 ? (
                    <>🔒 Plati {ukupno} KM</>
                  ) : (
                    <>Dalje <ArrowRight size={16} /></>
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [checkout, setCheckout] = useState(null); // null = closed, or event object

  const openCheckout = (event) => setCheckout(event || DEFAULT_EVENT);
  const closeCheckout = () => setCheckout(null);

  // Inject openCheckout into child components via a simple context trick
  const NavbarC = () => {
    const links = ["Funkcije", "Prednosti", "Događaji", "Kontakt"];
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const fn = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", fn);
      return () => window.removeEventListener("scroll", fn);
    }, []);
    return (
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(10,22,40,0.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none", transition: "all 0.4s ease", padding: "0 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Ticket size={18} color="white" />
            </div>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 800, color: COLORS.white }}>
              Moja<span style={{ color: COLORS.orange }}>Karta</span><span style={{ color: COLORS.slate, fontSize: 16 }}>.ba</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ color: COLORS.slateLight, textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = COLORS.white}
                onMouseLeave={e => e.target.style.color = COLORS.slateLight}>{l}</a>
            ))}
            <button onClick={() => openCheckout(null)} style={{ background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, color: "white", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              Kupi Kartu
            </button>
          </div>
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
                <button onClick={() => { setOpen(false); openCheckout(null); }} style={{ background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, color: "white", border: "none", borderRadius: 8, padding: "12px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                  Kupi Kartu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  };

  const HeroC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, -120]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    return (
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,58,95,0.8) 0%, ${COLORS.navy} 70%)`, padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, background: `radial-gradient(circle, rgba(255,107,43,0.15), transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} style={{ position: "absolute", bottom: "5%", left: "-10%", width: 600, height: 600, background: `radial-gradient(circle, rgba(30,58,95,0.5), transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
            <motion.div style={{ y, opacity }}>
              <AnimatedSection>
                <Pill>Platforma #1 u BiH</Pill>
                <motion.h1 variants={fadeUp} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(42px, 5.5vw, 72px)", fontWeight: 900, lineHeight: 1.05, color: COLORS.white, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
                  Vaše sjedište,<br /><span style={{ color: COLORS.orange }}>vaše iskustvo</span>
                </motion.h1>
                <motion.p variants={fadeUp} style={{ fontSize: 18, color: COLORS.slateLight, lineHeight: 1.75, marginBottom: 40, maxWidth: 480, fontFamily: "'DM Sans', system-ui" }}>
                  Centralizovana prodaja karata, AI glasovne komande, 360° pogled sa sjedišta — sve na jednom mjestu. Za svakoga.
                </motion.p>
                <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <button onClick={() => openCheckout(null)} style={{ background: `linear-gradient(135deg, ${COLORS.orange}, #FF8C5A)`, color: "white", border: "none", borderRadius: 12, padding: "16px 32px", fontWeight: 700, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: `0 8px 32px rgba(255,107,43,0.35)`, transition: "transform 0.2s, box-shadow 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 16px 40px rgba(255,107,43,0.45)`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 32px rgba(255,107,43,0.35)`; }}>
                    Kupi Kartu <ArrowRight size={18} />
                  </button>
                  <button onClick={() => document.getElementById('događaji')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ background: "transparent", color: COLORS.white, border: `1.5px solid rgba(255,255,255,0.15)`, borderRadius: 12, padding: "16px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, backdropFilter: "blur(10px)", transition: "border-color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent"; }}>
                    ▶ Pogledaj Događaje
                  </button>
                </motion.div>
                <motion.div variants={fadeUp} style={{ display: "flex", gap: 40, marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {[["50K+", "Korisnika"], ["200+", "Događaja"], ["99.9%", "Pouzdanost"]].map(([n, l]) => (
                    <div key={l}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.orange, fontFamily: "'Playfair Display', serif" }}>{n}</div>
                      <div style={{ fontSize: 13, color: COLORS.slate, marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </motion.div>
              </AnimatedSection>
            </motion.div>
            {/* Phone mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.85, rotateY: 15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", justifyContent: "center" }} className="hero-mockup">
              <div style={{ position: "relative", width: 340, height: 500 }}>
                <div style={{ width: 300, height: 500, background: COLORS.cardBg, borderRadius: 40, border: `1.5px solid rgba(255,255,255,0.08)`, overflow: "hidden", boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)`, position: "relative" }}>
                  <div style={{ background: `linear-gradient(160deg, ${COLORS.blue} 0%, ${COLORS.navy} 100%)`, height: 200, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    {[...Array(6)].map((_, row) => (
                      <div key={row} style={{ position: "absolute", bottom: row * 28 + 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
                        {[...Array(8 - row)].map((_, seat) => (
                          <div key={seat} style={{ width: 28, height: 20, borderRadius: "6px 6px 0 0", background: seat === 3 && row === 0 ? COLORS.orange : `rgba(255,255,255,${0.06 + row * 0.03})`, border: `1px solid rgba(255,255,255,0.08)` }} />
                        ))}
                      </div>
                    ))}
                    <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,107,43,0.2)", borderRadius: 8, padding: "4px 10px", fontSize: 11, color: COLORS.orange, fontWeight: 700, border: "1px solid rgba(255,107,43,0.3)" }}>360° POGLED</div>
                  </div>
                  <div style={{ padding: 20 }}>
                    <div style={{ fontSize: 11, color: COLORS.slate, marginBottom: 4 }}>PETAK, 28. JUN 2025</div>
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
                    <button onClick={() => openCheckout(DEFAULT_EVENT)} style={{ width: "100%", background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, borderRadius: 12, padding: "12px", textAlign: "center", color: "white", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
                      Kupi Kartu
                    </button>
                  </div>
                </div>
                <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: "absolute", top: 40, right: -20, background: COLORS.cardBg, borderRadius: 14, padding: "10px 14px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 40px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, background: "rgba(255,107,43,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}><QrCode size={16} color={COLORS.orange} /></div>
                  <div><div style={{ fontSize: 11, fontWeight: 700, color: COLORS.white }}>QR Skeniranje</div><div style={{ fontSize: 10, color: COLORS.slate }}>Trenutni ulaz</div></div>
                </motion.div>
                <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: "absolute", bottom: 60, right: -30, background: "rgba(30,58,95,0.9)", borderRadius: 14, padding: "10px 14px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 40px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, background: "rgba(255,107,43,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}><Mic size={16} color={COLORS.orange} /></div>
                  <div><div style={{ fontSize: 11, fontWeight: 700, color: COLORS.white }}>AI Glasovne</div><div style={{ fontSize: 10, color: COLORS.slate }}>Komande aktivne</div></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('funkcije')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: COLORS.slate, cursor: "pointer" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Skrolaj</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>
    );
  };

  const EventsC = () => {
    const events = [
      { name: "FK Sarajevo — Željezničar", category: "Fudbal", date: "28. Jun 2025", venue: "Olimp. Stadion Koševo", price: "25 KM", basePrice: 25, seats: "1,240 slobodnih", color: "#27AE60", emoji: "⚽" },
      { name: "Dino Merlin — Povratak", category: "Koncert", date: "12. Jul 2025", venue: "Zetra, Sarajevo", price: "45 KM", basePrice: 45, seats: "842 slobodnih", color: "#9B51E0", emoji: "🎤" },
      { name: "Elitna Košarka — Finale", category: "Košarka", date: "19. Jul 2025", venue: "KSC Skenderija", price: "18 KM", basePrice: 18, seats: "320 slobodnih", color: "#F2994A", emoji: "🏀" },
      { name: "Rock Festival — Mostar", category: "Festival", date: "2. Aug 2025", venue: "Lučki Most, Mostar", price: "35 KM", basePrice: 35, seats: "2,100 slobodnih", color: "#EB5757", emoji: "🎸" },
      { name: "Cirque du Soleil", category: "Predstava", date: "15. Aug 2025", venue: "BBI Centar, Sarajevo", price: "60 KM", basePrice: 60, seats: "540 slobodnih", color: "#2D9CDB", emoji: "🎪" },
      { name: "ATP Tenis — Banja Luka", category: "Tenis", date: "28. Aug 2025", venue: "Arena Banja Luka", price: "22 KM", basePrice: 22, seats: "710 slobodnih", color: "#F2C94C", emoji: "🎾" },
    ];
    return (
      <section id="događaji" style={{ background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`, padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimatedSection>
            <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
              <div><Pill>Predstojeći Događaji</Pill><h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: COLORS.white, margin: 0, letterSpacing: "-0.02em" }}>Ne propusti ništa</h2></div>
              <button onClick={() => openCheckout(null)} style={{ background: "transparent", color: COLORS.orange, border: `1.5px solid ${COLORS.orange}40`, borderRadius: 10, padding: "10px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                Svi događaji <ArrowRight size={16} />
              </button>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
              {events.map((ev, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
                  style={{ background: COLORS.cardBg, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", cursor: "pointer", transition: "box-shadow 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4)`}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                  <div style={{ height: 100, background: `linear-gradient(135deg, ${ev.color}22, ${ev.color}08)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative", borderBottom: `1px solid ${ev.color}20` }}>
                    {ev.emoji}
                    <span style={{ position: "absolute", top: 12, right: 12, fontSize: 10, fontWeight: 700, color: ev.color, background: `${ev.color}18`, borderRadius: 999, padding: "4px 10px", border: `1px solid ${ev.color}30` }}>{ev.category.toUpperCase()}</span>
                  </div>
                  <div style={{ padding: 20 }}>
                    <h3 style={{ fontFamily: "'DM Sans', system-ui", fontWeight: 700, fontSize: 16, color: COLORS.white, margin: "0 0 12px", lineHeight: 1.3 }}>{ev.name}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.slate }}><Calendar size={13} color={ev.color} /> {ev.date}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.slate }}><MapPin size={13} color={ev.color} /> {ev.venue}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.slate }}><Users size={13} color={ev.color} /> {ev.seats}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontSize: 10, color: COLORS.slate, marginBottom: 2 }}>OD</div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.orange, fontFamily: "'Playfair Display', serif" }}>{ev.price}</div>
                      </div>
                      <button onClick={() => openCheckout(ev)}
                        style={{ background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeLight})`, color: "white", border: "none", borderRadius: 10, padding: "10px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, transition: "opacity 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
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
  };

  return (
    <div style={{ background: COLORS.navy, minHeight: "100vh", fontFamily: "'DM Sans', system-ui" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.navy}; }
        input::placeholder { color: ${COLORS.slate}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.navy}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.blue}; border-radius: 3px; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: flex !important; } }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .hero-mockup { display: none !important; } }
      `}</style>
      <NavbarC />
      <HeroC />
      <Features />
      <View360 />
      <AISection />
      <Benefits />
      <EventsC />
      <Footer />
      <AnimatePresence>
        {checkout && <CheckoutModal event={checkout} onClose={closeCheckout} />}
      </AnimatePresence>
    </div>
  );
}