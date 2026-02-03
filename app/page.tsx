"use client";

import React from "react";
import Link from "next/link";
import { Logo, LogoHero } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Calculator,
  Shield,
  TrendingUp,
  Users,
  Star,
  Play,
  Phone,
  ChevronDown,
} from "lucide-react";

const stats = [
  { value: "12 450€", label: "Économie moyenne/an" },
  { value: "500+", label: "Entrepreneurs aidés" },
  { value: "4.9/5", label: "Satisfaction" },
];

const features = [
  {
    icon: Calculator,
    title: "Diagnostic complet",
    description:
      "Analyse approfondie de votre situation : statut, charges, revenus, objectifs. On identifie où vous perdez de l'argent.",
  },
  {
    icon: TrendingUp,
    title: "Stratégie sur-mesure",
    description:
      "Plan d'action personnalisé adapté à VOTRE profil. Optimisation fiscale, changement de statut si nécessaire.",
  },
  {
    icon: Users,
    title: "Coaching mensuel",
    description:
      "Suivi régulier pendant 12 mois pour ajuster et optimiser au fil de l'année. Vous n'êtes jamais seul.",
  },
  {
    icon: Shield,
    title: "Protection patrimoine",
    description:
      "Séparez vos biens personnels de votre activité. Dormez tranquille, votre famille est protégée.",
  },
];

const testimonials = [
  {
    name: "Sophie M.",
    role: "Consultante Marketing",
    amount: "+8 400€/an",
    text: "en passant de micro à SASU optimisée",
    avatar: "SM",
  },
  {
    name: "Marc T.",
    role: "Artisan électricien",
    amount: "+12 000€/an",
    text: "économisés sur ses charges la 1ère année",
    avatar: "MT",
  },
  {
    name: "Julie L.",
    role: "E-commerce",
    amount: "+6 200€/an",
    text: "et peut enfin se verser un vrai salaire",
    avatar: "JL",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" variant="light" />
            
            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#simulateurs" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Simulateurs
              </Link>
              <Link href="#formations" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Formations
              </Link>
              <Link href="#tarifs" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Tarifs
              </Link>
              <Link href="#faq" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                FAQ
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="outline-light" size="sm">
                  Connexion
                </Button>
              </Link>
              <Link href="#diagnostic">
                <Button size="sm">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dégradé bleu */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden gradient-primary">
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-24 pb-16">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6">
            Payez moins d'impôts.
            <br />
            <span className="text-accent">Légalement.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Découvrez en 2 minutes combien vous pourriez économiser chaque année grâce à nos simulateurs gratuits.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="#simulateurs">
              <Button size="xl" className="min-w-[240px]">
                <Calculator size={20} />
                Calculer mes économies
              </Button>
            </Link>
            <Link href="#diagnostic">
              <Button variant="outline-light" size="xl" className="min-w-[240px]">
                <Phone size={20} />
                Parler à un expert
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-danger/10 text-danger text-sm font-semibold mb-4">
              Le problème
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Vous reconnaissez-vous ?
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Ces situations que vivent 90% des micro-entrepreneurs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "😤",
                title: "22% de charges",
                desc: "Vous payez 22% de charges URSSAF sur TOUT votre CA, même quand vous avez des frais",
              },
              {
                emoji: "🏠",
                title: "Patrimoine exposé",
                desc: "En micro, votre maison, votre voiture, vos économies sont exposés si ça tourne mal",
              },
              {
                emoji: "💳",
                title: "Crédit refusé",
                desc: "Les banques vous regardent de travers. Pas de bilan = pas de crédibilité",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{problem.emoji}</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-500">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Notre méthode
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Comment on vous accompagne
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour optimiser votre situation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-accent hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
              Résultats clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Ce qu'ils ont économisé avec DÉCLIC
            </h2>
            <p className="text-slate-500 text-lg">
              Des entrepreneurs comme vous qui ont repris le contrôle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-slate-100 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-accent mb-2">
                  {testimonial.amount}
                </p>
                <p className="text-slate-500">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="diagnostic"
        className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Combien laissez-vous sur la table chaque année ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Réservez votre diagnostic gratuit de 30 minutes. On analyse votre
            situation et on vous dit exactement combien vous pouvez économiser.
          </p>
          <Link href="/auth/login">
            <Button size="xl">
              <Calendar size={20} />
              Je réserve mon diagnostic gratuit
              <ArrowRight size={20} />
            </Button>
          </Link>
          <p className="mt-4 text-white/60 text-sm">
            Sans engagement • 100% gratuit • Réponse sous 24h
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo size="md" variant="light" />
            <p className="text-white/60 text-sm text-center">
              EVERYBOD'IR — Présent depuis plus de 10 ans • Accompagnement fiscal
              • Optimisation pour entrepreneurs
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-white/60 hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgv"
                className="text-white/60 hover:text-white transition-colors"
              >
                CGV
              </Link>
              <Link
                href="/confidentialite"
                className="text-white/60 hover:text-white transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
