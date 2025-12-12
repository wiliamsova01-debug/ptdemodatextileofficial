'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Palette, Scissors, Package, Star, ArrowRight, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    '/api/placeholder/1920/1080',
    '/api/placeholder/1920/1080', 
    '/api/placeholder/1920/1080'
  ]

  const products = [
    { id: 1, name: 'Batik Premium Collection', category: 'Traditional Textile', price: 'Contact for pricing' },
    { id: 2, name: 'Modern Fashion Apparel', category: 'Contemporary Design', price: 'Contact for pricing' },
    { id: 3, name: 'Custom Textile Design', category: 'Bespoke Service', price: 'Contact for pricing' },
    { id: 4, name: 'Industrial Fabric Supply', category: 'B2B Solution', price: 'Contact for pricing' },
    { id: 5, name: 'Fashion Accessories', category: 'Complete Collection', price: 'Contact for pricing' },
    { id: 6, name: 'Sustainable Textile', category: 'Eco-Friendly Line', price: 'Contact for pricing' }
  ]

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Textile Design',
      description: 'Custom textile design solutions for fashion and industrial needs'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Fashion Production',
      description: 'Full-service apparel production from design to final product'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Supply Chain',
      description: 'Comprehensive textile and apparel supply chain management'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DT</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PT DEMODA TEXTILE OFFICIAL
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Products</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
            Creative Textile & Fashion Industry
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
              PT DEMODA
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-800">TEXTILE OFFICIAL</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforming Creative Vision into Textile Excellence. 
            Premium Design, Fashion & Apparel Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Explore Our Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-20 blur-xl"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              About Us
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Creative Excellence in
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Textile & Fashion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the Indonesian textile industry with innovative designs and sustainable practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to <span className="text-purple-600">PT DEMODA TEXTILE OFFICIAL</span>
              </h3>
              <p className="text-gray-600 mb-6">
                We are a premier textile design, fashion, and apparel company based in Jakarta. 
                Our expertise spans from traditional textile artistry to contemporary fashion innovation, 
                delivering exceptional quality and creative solutions to clients worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                Located in the heart of Jakarta at Plaza Lotte Fatmawati, we combine Indonesian 
                heritage with modern design sensibilities to create unique textile and fashion products 
                that stand out in the global market.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Premium Quality Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-pink-600" />
                  <span className="text-gray-700">Innovative Design Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-cyan-600" />
                  <span className="text-gray-700">Sustainable Production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Global Market Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              Our Products
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Premium Textile & Fashion
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Collections</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exclusive range of textile designs and fashion apparel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="w-16 h-16 text-white/50" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-purple-600 font-semibold">{product.price}</p>
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Textile
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end services from concept to creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-purple-600 px-4 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact
              <span className="text-yellow-300"> PT DEMODA TEXTILE OFFICIAL</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to start your next textile or fashion project? Get in touch with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-300 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-white/80">
                    Plaza Lotte Fatmawati, Jl. RS. Fatmawati Raya No.15 Blok B 3<br />
                    Desa/Kelurahan Cilandak Barat, Kec. Cilandak<br />
                    Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta<br />
                    Kode Pos: 12420
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-300" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-white/80">082312044648</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-300" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-white/80">info@demodatextile.com</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <span className="font-bold text-lg">PT DEMODA TEXTILE OFFICIAL</span>
              </div>
              <p className="text-gray-400">
                Creative excellence in textile design, fashion, and apparel solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT DEMODA TEXTILE OFFICIAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}