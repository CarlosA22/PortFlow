import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Zap,
  BarChart3,
  Users,
  Smartphone,
  Globe,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-primary/10 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="font-bold text-lg text-foreground">
                PortFlow
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-foreground/70 hover:text-foreground transition"
              >
                Features
              </a>
              <a
                href="#modules"
                className="text-sm text-foreground/70 hover:text-foreground transition"
              >
                Modules
              </a>
              <a
                href="#vision"
                className="text-sm text-foreground/70 hover:text-foreground transition"
              >
                Vision
              </a>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Logistics with <span className="text-primary">Dignity</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 mb-8">
              PortFlow transforms how truck drivers and port terminals interact.
              While others track containers, we empower people. Real-time
              visibility, genuine care, operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/driver-app"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group"
              >
                Explore Driver App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/platform"
                className="px-6 py-3 bg-secondary/20 text-secondary border border-secondary/30 rounded-lg font-semibold hover:bg-secondary/30 transition flex items-center justify-center gap-2"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-64 md:h-96 flex items-center justify-center border border-primary/10">
              <div className="text-center">
                <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-foreground/60 text-sm">Driver App Preview</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Dignity Map
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Find safe places to eat, rest, and shower on the road
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Smart Queue
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Real ETA instead of position numbers. Rest while you wait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-12 sm:py-16 md:py-20 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Core Features
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Every feature designed to solve real pain points for drivers and
              operators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-xl border border-border p-8 hover:border-primary/20 hover:bg-primary/5 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Amenity Map
              </h3>
              <p className="text-foreground/60 text-sm">
                Interactive map showing safe bathrooms, parking, restaurants,
                and services rated by fellow drivers.
              </p>
            </div>

            <div className="rounded-xl border border-border p-8 hover:border-primary/20 hover:bg-primary/5 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Geofencing Check-in
              </h3>
              <p className="text-foreground/60 text-sm">
                Automatic detection when you arrive near the port. No need to
                get down from the truck.
              </p>
            </div>

            <div className="rounded-xl border border-border p-8 hover:border-primary/20 hover:bg-primary/5 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Smart Queue Prediction
              </h3>
              <p className="text-foreground/60 text-sm">
                Real wait time estimates. Sleep while you wait and get alerted
                15 minutes before your turn.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border p-8 hover:border-primary/20 hover:bg-primary/5 transition">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Digital Wallet
              </h3>
              <p className="text-foreground/60 text-sm">
                Keep all travel documents, QR codes, and permits offline. Work
                even without internet.
              </p>
            </div>

            <div className="rounded-xl border border-border p-8 hover:border-primary/20 hover:bg-primary/5 transition">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Instant Notifications
              </h3>
              <p className="text-foreground/60 text-sm">
                Direct messages from the port. No more confusing WhatsApp groups
                or missed information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section
        id="modules"
        className="py-12 sm:py-16 md:py-20 bg-primary/5 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Two Powerful Platforms
            </h2>
            <p className="text-foreground/60 text-lg">
              Connected systems for drivers and operators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile App */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Driver App
                </h3>
              </div>
              <p className="text-foreground/60 mb-6">
                Lightweight PWA for Android. Built for real driving conditions:
                low battery impact, offline-first, works on 3G.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    Dignity Map with amenities and ratings
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    Automatic geofencing check-in
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    Queue ETA with smart notifications
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    Offline document wallet
                  </span>
                </li>
              </ul>
              <Link
                to="/driver-app"
                className="mt-6 block text-center px-6 py-3 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition"
              >
                View Driver App Demo
              </Link>
            </div>

            {/* Web Platform */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Control Tower
                </h3>
              </div>
              <p className="text-foreground/60 mb-6">
                Real-time SaaS platform for terminal operators. See every truck
                within 5km, predict no-shows, manage queues dynamically.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    5km geofencing radar view
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    No-show prediction alerts
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    Drag & drop queue management
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">
                    Broadcast messaging & sustainability metrics
                  </span>
                </li>
              </ul>
              <Link
                to="/platform"
                className="mt-6 block text-center px-6 py-3 bg-secondary/10 text-secondary rounded-lg font-semibold hover:bg-secondary/20 transition"
              >
                View Dashboard Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="py-12 sm:py-16 md:py-20 border-t border-border"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why PortFlow?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                For Drivers
              </h3>
              <p className="text-foreground/60">
                We respect your time and safety. Know exactly when you'll be
                called. Find clean facilities. Sleep without stress. Our 44-50
                year-old motoristas deserve dignity, not just logistics.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                For Terminal Operators
              </h3>
              <p className="text-foreground/60">
                Optimize every minute. See the invisible "limbo" between factory
                and gate. Call the right truck at the right time. Reduce
                no-shows. Maximize crane utilization without chaos.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                For Ports
              </h3>
              <p className="text-foreground/60">
                Modernize the driver experience while new infrastructure (like
                JBS Terminals' investment) reaches its potential. Connect humans
                and systems. Prove that growth doesn't sacrifice dignity.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/10">
            <p className="text-center text-lg text-foreground">
              <span className="font-semibold">
                "Enquanto a infraestrutura portuária de Itajaí se moderniza
              </span>
              , a relação com os motoristas ainda é arcaica.{" "}
              <span className="font-semibold">
                O PortFlow é a ponte digital
              </span>{" "}
              que resolve esse gargalo. Diferente dos sistemas tradicionais que
              rastreiam apenas caixas metálicas,{" "}
              <span className="text-primary font-semibold">
                nós monitoramos e cuidamos do ser humano
              </span>{" "}
              que transporta a carga."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Logistics?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join the revolution. See how PortFlow can revolutionize your
            operation.
          </p>
          <button className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="font-bold text-foreground">PortFlow</span>
            </div>
            <p className="text-foreground/60 text-sm">
              © 2025 PortFlow. Logistics with dignity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
