import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Shield, ArrowRight } from "lucide-react"

import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffef5]">
      {/* Header */}
      <header className="bg-[#fffef5] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="https://rosenberg-maintenance.co.il/rosenberg-maintenance-logo-2.svg"
                alt="Rosenberg Maintenance Logo"
                className="h-8 w-auto filter brightness-0"
                width={32}
                height={32}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(11%) sepia(85%) saturate(1654%) hue-rotate(194deg) brightness(95%) contrast(95%)",
                }}
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[#053145] hover:text-[#053145]/80 transition-colors">
                Services
              </a>
              <a href="#why-choose-us" className="text-[#053145] hover:text-[#053145]/80 transition-colors">
                Why Choose Us
              </a>
              <a href="#process" className="text-[#053145] hover:text-[#053145]/80 transition-colors">
                Our Process
              </a>
              <a href="#pest-guide" className="text-[#053145] hover:text-[#053145]/80 transition-colors">
                Pest Guide
              </a>
              <a href="#testimonials" className="text-[#053145] hover:text-[#053145]/80 transition-colors">
                Testimonials
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-red-500" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-gray-500">Call Now (24/7)</div>
                  <div className="text-sm font-semibold text-red-500">+972 55-920-6313</div>
                </div>
              </div>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6">Schedule Service</Button>
            </div>
          </div>
        </div>
      </header>

      <section
        className="relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: "url(https://www.rosenberg-maintenance.co.il/roof-coating_cr.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#053145] mb-6 leading-tight">
              Professional Roof & Balcony Waterproofing Solutions
            </h1>
            <div className="space-y-2 mb-8 text-[#053145]/90">
              <p className="text-lg">Advanced polyurea waterproofing for maximum protection.</p>
              <p className="text-lg">
                Specialized in sealing high-traffic roofs with technical installations and equipment.
              </p>
            </div>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg">
              Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-md">
            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#053145] mb-2">Premium Quality Materials</h3>
                  <p className="text-[#053145]/80 text-sm">First-class polymeric materials for lasting protection</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Gallery */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#053145] text-center mb-12">Examples Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#053145]/5 rounded-lg border border-[#053145]/10 flex items-center justify-center"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=roof waterproofing project ${i + 1}`}
                  alt={`Waterproofing project example ${i + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#053145] text-[#fffef5] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#fffef5] rounded-md flex items-center justify-center">
                  <span className="text-[#053145] font-bold text-sm">RM</span>
                </div>
                <span className="font-semibold text-lg">Rosenberg Maintenance</span>
              </div>
              <p className="text-[#fffef5]/80">
                Expert solutions for coating roofs with polyurea. Fast, flexible, and long-lasting protection for your
                property.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-[#fffef5]/80 hover:text-[#fffef5] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="text-[#fffef5]/80 hover:text-[#fffef5] transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-[#fffef5]/80 hover:text-[#fffef5] transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-[#fffef5]/80 hover:text-[#fffef5] transition-colors">
                    Examples Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
              <ul className="space-y-2 text-[#fffef5]/80">
                <li>Kfar Hanasi, North</li>
                <li>WhatsApp: 055-920-6313</li>
                <li>
                  <a href="mailto:ben@rosenberg-maintenance.co.il" className="hover:text-[#fffef5] transition-colors">
                    ben@rosenberg-maintenance.co.il
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#fffef5]/20 mt-8 pt-8 text-center text-[#fffef5]/60">
            <p>© 2025 Rosenberg Maintenance. All rights reserved. Expert solutions for coating roofs with polyurea.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
