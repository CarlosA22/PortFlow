import { Link } from "react-router-dom";
import { ArrowLeft, Radar, Zap, BarChart3, Send, TrendingDown } from "lucide-react";

export default function Platform() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-border sticky top-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-foreground/5 rounded-lg transition">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">TC</span>
            </div>
            <span className="font-bold text-foreground">PortFlow Control Tower</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Control Tower Dashboard</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Real-time SaaS platform for terminal operators. See every truck within 5km, predict no-shows, manage queues dynamically.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-foreground/5 to-secondary/5 rounded-2xl border border-border overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-foreground to-foreground/80 text-white px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Port of Itajaí - Terminal Operations</h2>
                <p className="text-white/70 text-sm">Real-time Geofencing Radar</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Current Time</p>
                <p className="text-2xl font-bold">14:23</p>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Radar Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">5KM Geofencing Radar</h3>
                  
                  {/* Radar Visualization */}
                  <div className="aspect-square max-w-md mx-auto relative mb-6">
                    <svg className="w-full h-full" viewBox="0 0 300 300">
                      {/* Background circles */}
                      <circle cx="150" cy="150" r="140" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      <circle cx="150" cy="150" r="100" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      <circle cx="150" cy="150" r="60" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      <circle cx="150" cy="150" r="20" fill="none" stroke="#E5E7EB" strokeWidth="1" />

                      {/* Grid lines */}
                      <line x1="150" y1="10" x2="150" y2="290" stroke="#E5E7EB" strokeWidth="1" />
                      <line x1="10" y1="150" x2="290" y2="150" stroke="#E5E7EB" strokeWidth="1" />

                      {/* Trucks (dots) */}
                      {/* Trucks approaching */}
                      <circle cx="150" cy="70" r="6" fill="#2563EB" />
                      <circle cx="180" cy="90" r="6" fill="#2563EB" />
                      <circle cx="210" cy="130" r="6" fill="#2563EB" />
                      <circle cx="195" cy="160" r="6" fill="#2563EB" />

                      {/* Trucks in gate (red) */}
                      <circle cx="140" cy="155" r="7" fill="#DC2626" strokeWidth="2" stroke="#FCA5A5" />

                      {/* At terminal (yellow) */}
                      <circle cx="150" cy="165" r="6" fill="#F59E0B" />

                      {/* Text labels */}
                      <text x="150" y="20" textAnchor="middle" fontSize="10" fill="#6B7280">GATE</text>
                      <text x="285" y="155" textAnchor="start" fontSize="10" fill="#6B7280">0 km</text>
                      <text x="280" y="110" textAnchor="start" fontSize="9" fill="#9CA3AF">2 km</text>
                      <text x="260" y="70" textAnchor="start" fontSize="9" fill="#9CA3AF">4 km</text>
                    </svg>

                    {/* Legend */}
                    <div className="mt-4 flex gap-6 justify-center flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-xs text-foreground">Approaching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-xs text-foreground">At Gate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <span className="text-xs text-foreground">Processing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Panel */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-border p-4">
                  <p className="text-sm text-foreground/60 mb-2">In 5KM Radius</p>
                  <p className="text-3xl font-bold text-primary">12</p>
                  <p className="text-xs text-foreground/60">trucks nearby</p>
                </div>

                <div className="bg-white rounded-xl border border-border p-4">
                  <p className="text-sm text-foreground/60 mb-2">At Gate</p>
                  <p className="text-3xl font-bold text-red-600">2</p>
                  <p className="text-xs text-foreground/60">processing now</p>
                </div>

                <div className="bg-white rounded-xl border border-border p-4">
                  <p className="text-sm text-foreground/60 mb-2">No-Show Risk</p>
                  <p className="text-3xl font-bold text-orange-500">3</p>
                  <p className="text-xs text-foreground/60">alerted to reschedule</p>
                </div>

                <div className="bg-white rounded-xl border border-border p-4">
                  <p className="text-sm text-foreground/60 mb-2">Avg Wait Time</p>
                  <p className="text-3xl font-bold text-secondary">42 min</p>
                  <p className="text-xs text-foreground/60">ported from yesterday</p>
                </div>
              </div>
            </div>

            {/* Queue Management */}
            <div className="mt-8 bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Smart Queue Management</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left py-3 px-4 text-foreground/60 font-medium">Position</th>
                      <th className="text-left py-3 px-4 text-foreground/60 font-medium">Truck ID</th>
                      <th className="text-left py-3 px-4 text-foreground/60 font-medium">Driver</th>
                      <th className="text-left py-3 px-4 text-foreground/60 font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-foreground/60 font-medium">ETA</th>
                      <th className="text-left py-3 px-4 text-foreground/60 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-foreground/5 transition">
                      <td className="py-3 px-4 font-semibold text-foreground">1</td>
                      <td className="py-3 px-4 text-foreground">BR0012345</td>
                      <td className="py-3 px-4 text-foreground">João Silva</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">Processing</span>
                      </td>
                      <td className="py-3 px-4 text-foreground/60">Now</td>
                      <td className="py-3 px-4">
                        <button className="text-primary hover:text-primary/80 text-xs font-semibold">View</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-foreground/5 transition">
                      <td className="py-3 px-4 font-semibold text-foreground">2</td>
                      <td className="py-3 px-4 text-foreground">BR0012346</td>
                      <td className="py-3 px-4 text-foreground">Carlos Mendes</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">Waiting</span>
                      </td>
                      <td className="py-3 px-4 text-foreground/60">8 mins</td>
                      <td className="py-3 px-4">
                        <button className="text-primary hover:text-primary/80 text-xs font-semibold">Prioritize</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-foreground/5 transition">
                      <td className="py-3 px-4 font-semibold text-foreground">3</td>
                      <td className="py-3 px-4 text-foreground">BR0012347</td>
                      <td className="py-3 px-4 text-foreground">Ana Santos</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Approaching</span>
                      </td>
                      <td className="py-3 px-4 text-foreground/60">3.2 km</td>
                      <td className="py-3 px-4">
                        <button className="text-primary hover:text-primary/80 text-xs font-semibold">Message</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-foreground/5 transition opacity-50">
                      <td className="py-3 px-4 font-semibold text-foreground">4</td>
                      <td className="py-3 px-4 text-foreground">BR0012348</td>
                      <td className="py-3 px-4 text-foreground">Pedro Costa</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">No-Show Risk ⚠️</span>
                      </td>
                      <td className="py-3 px-4 text-foreground/60">45 km away</td>
                      <td className="py-3 px-4">
                        <button className="text-red-600 hover:text-red-700 text-xs font-semibold">Reschedule</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Broadcast Messages */}
            <div className="mt-8 bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Broadcast Messages</h3>
              
              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-900 mb-1">
                    ⚠️ Gate 2 Maintenance
                  </p>
                  <p className="text-sm text-blue-800 mb-3">
                    Gate 2 closed for maintenance until 15:00. Please direct arriving trucks to Gate 1.
                  </p>
                  <p className="text-xs text-blue-600">Sent 1 min ago to 12 drivers</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-900 mb-1">
                    ✓ Early Arrival Bonus
                  </p>
                  <p className="text-sm text-green-800 mb-3">
                    First 3 trucks arriving before 15:00 get 10% faster processing. Check your queue position!
                  </p>
                  <p className="text-xs text-green-600">Sent 5 mins ago to 34 drivers</p>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type broadcast message..."
                  className="flex-1 px-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Dashboard Features</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Radar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">5KM Geofencing Radar</h3>
                  <p className="text-foreground/60 text-sm">Real-time view of all trucks approaching within 5km. Know who's coming and when.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">No-Show Prediction</h3>
                  <p className="text-foreground/60 text-sm">Alerts when a scheduled truck is too far away. Reschedule before wasting crane time.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Smart Queue Management</h3>
                  <p className="text-foreground/60 text-sm">Drag & drop to reorder. Prioritize urgent cargo. React to real-time conditions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Instant Broadcasting</h3>
                  <p className="text-foreground/60 text-sm">Send messages to all drivers or select groups. Replaces chaotic WhatsApp groups.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Business Impact</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Reduce No-Shows</p>
                  <p className="text-foreground/60 text-sm">45% fewer late arrivals through predictive alerts</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Optimize Crane Time</p>
                  <p className="text-foreground/60 text-sm">Call the right truck at the right moment</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Reduce Queue Time</p>
                  <p className="text-foreground/60 text-sm">Real-time visibility = smarter scheduling</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Improve Communication</p>
                  <p className="text-foreground/60 text-sm">Replace WhatsApp chaos with official channels</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-foreground">Track Sustainability</p>
                  <p className="text-foreground/60 text-sm">Calculate CO2 saved from reduced idling</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ESG Metrics */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Sustainability Metrics</h3>
              <p className="text-foreground/60">ESG reporting for investors and stakeholders</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">847 tons</p>
              <p className="text-foreground/60 text-sm">CO2 avoided this month</p>
              <p className="text-xs text-foreground/40 mt-2">From reduced engine idling</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">2,340 hrs</p>
              <p className="text-foreground/60 text-sm">Driver rest time enabled</p>
              <p className="text-xs text-foreground/40 mt-2">Health & safety improvement</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">34%</p>
              <p className="text-foreground/60 text-sm">Average wait time reduction</p>
              <p className="text-xs text-foreground/40 mt-2">Operational efficiency gain</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-secondary text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Terminal Operations?</h2>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Optimize your JBS terminal, reduce costs, improve sustainability metrics, and deliver better service to drivers.
          </p>
          <Link to="/" className="inline-block px-6 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-white/90 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
