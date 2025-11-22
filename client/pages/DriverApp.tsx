import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Navigation, FileText, AlertCircle, Star } from "lucide-react";

export default function DriverApp() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-border sticky top-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-foreground/5 rounded-lg transition">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-foreground">PortFlow Driver</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Driver App Preview</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A lightweight PWA optimized for truck drivers on Android. Works offline, low battery impact, fast even on 3G.
          </p>
        </div>

        {/* Mobile Mockup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mockup 1: Home/Queue Screen */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden border-8 border-gray-900 aspect-[9/16] flex flex-col shadow-2xl">
              {/* Status Bar */}
              <div className="bg-gray-900 px-4 py-2 text-white text-xs flex justify-between">
                <span>9:41</span>
                <span>●●●●●</span>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col">
                {/* Driver Info */}
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <p className="text-white/70 text-xs mb-1">CPF: 123.456.789-00</p>
                  <p className="text-white font-semibold">João Silva</p>
                </div>

                {/* Queue Status */}
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <p className="text-white/70 text-xs mb-2">ESTIMATED CALL</p>
                  <p className="text-4xl font-bold text-white mb-1">47 min</p>
                  <p className="text-white/70 text-xs">You're 12th in queue</p>
                </div>

                {/* Status Indicator */}
                <div className="flex gap-2 mb-4">
                  <button className="flex-1 bg-white text-primary py-2 rounded-lg font-semibold text-sm">
                    🛌 Rest Mode
                  </button>
                  <button className="flex-1 bg-primary/30 text-white py-2 rounded-lg font-semibold text-sm border border-white/20">
                    📍 Map
                  </button>
                </div>

                {/* Appointment Card */}
                <div className="bg-white rounded-xl p-4 flex-1">
                  <p className="text-foreground/60 text-xs mb-2">Your Appointment</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">BR0012345</p>
                        <p className="text-foreground/60 text-xs">Container ID</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-secondary/10 rounded flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">Gate 2</p>
                        <p className="text-foreground/60 text-xs">Scheduled 10:30</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-primary/10 text-primary py-2 rounded-lg text-xs font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 mt-4 text-center">Queue Status Screen</p>
          </div>

          {/* Mockup 2: Dignity Map */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden border-8 border-gray-900 aspect-[9/16] flex flex-col shadow-2xl">
              {/* Status Bar */}
              <div className="bg-gray-900 px-4 py-2 text-white text-xs flex justify-between">
                <span>9:41</span>
                <span>●●●●●</span>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <p className="text-white font-semibold text-sm mb-2">🗺️ Dignity Map</p>
                  <p className="text-white/70 text-xs">Find safe places to rest</p>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white/10 rounded-xl p-4 mb-4 aspect-square flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <Navigation className="w-8 h-8 text-white/50 mx-auto mb-2" />
                    <p className="text-white/50 text-xs">Map with amenities</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-white font-semibold text-sm">Clean Bathrooms</p>
                      <span className="text-yellow-300 text-sm">★★★★☆</span>
                    </div>
                    <p className="text-white/70 text-xs">2.3 km away</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-white font-semibold text-sm">Safe Parking</p>
                      <span className="text-yellow-300 text-sm">★★★★★</span>
                    </div>
                    <p className="text-white/70 text-xs">1.8 km away • 24h security</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-white font-semibold text-sm">Restaurant</p>
                      <span className="text-yellow-300 text-sm">★★★☆☆</span>
                    </div>
                    <p className="text-white/70 text-xs">0.9 km away • R$ 25 prato</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 mt-4 text-center">Dignity Map Screen</p>
          </div>

          {/* Mockup 3: Documents */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden border-8 border-gray-900 aspect-[9/16] flex flex-col shadow-2xl">
              {/* Status Bar */}
              <div className="bg-gray-900 px-4 py-2 text-white text-xs flex justify-between">
                <span>9:41</span>
                <span>●●●●●</span>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <p className="text-white font-semibold text-sm mb-2">📄 Digital Wallet</p>
                  <p className="text-white/70 text-xs">All docs offline, always ready</p>
                </div>

                {/* Documents */}
                <div className="space-y-3">
                  {/* Document 1 */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-foreground font-semibold text-sm">Appointment QR Code</p>
                        <p className="text-foreground/60 text-xs">BR0012345</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-300 flex items-center justify-center text-xs">
                        QR Code
                      </div>
                    </div>
                  </div>

                  {/* Document 2 */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-foreground font-semibold text-sm">CNH - Driver License</p>
                        <p className="text-foreground/60 text-xs">Valid until 05/2026</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded text-xs text-foreground/60">
                      Document stored offline
                    </div>
                  </div>

                  {/* Document 3 */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-foreground font-semibold text-sm">Cargo Documents</p>
                        <p className="text-foreground/60 text-xs">3 files</p>
                      </div>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">📦</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded text-xs text-foreground/60">
                      All critical docs cached
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 mt-4 text-center">Digital Wallet Screen</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dignity Map</h3>
                  <p className="text-foreground/60 text-sm">Interactive map of safe bathrooms, restaurants, and parking spots rated by drivers</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Auto Check-in</h3>
                  <p className="text-foreground/60 text-sm">5km geofencing automatically notifies port when you arrive. No manual steps needed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Smart Queue ETA</h3>
                  <p className="text-foreground/60 text-sm">Real wait time instead of position numbers. Sleep while you wait with alarm reminder.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Digital Wallet</h3>
                  <p className="text-foreground/60 text-sm">All documents and QR codes stored offline. Always accessible, even without signal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Technical Excellence</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Lightweight PWA</p>
                  <p className="text-foreground/60 text-sm">Works perfectly on entry-level Android</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Low Battery Impact</p>
                  <p className="text-foreground/60 text-sm">Optimized for 24-hour road shifts</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Offline First</p>
                  <p className="text-foreground/60 text-sm">Works on 3G or no connection</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Smart Notifications</p>
                  <p className="text-foreground/60 text-sm">Alerts 15 mins before your turn</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Built for Real Drivers</h2>
          <p className="mb-6 opacity-90">
            44-50 year old motoristas. 24-hour shifts. Android phones. 3G connections. Real needs. Real solutions.
          </p>
          <Link to="/" className="inline-block px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
