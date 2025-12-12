'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, Package, Users, AlertTriangle, CreditCard, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm">
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
            
            <Link href="/">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Terms and <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to PT DEMODA TEXTILE OFFICIAL. These Terms and Conditions ("Terms") govern 
                your use of our textile design, fashion, and apparel services ("Services"). By accessing 
                or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                PT DEMODA TEXTILE OFFICIAL is a leading Indonesian textile company specializing in 
                custom textile design, fashion production, and apparel solutions. We are committed to 
                providing high-quality products and services to our clients worldwide.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Package className="w-6 h-6 text-purple-600 mr-3" />
                Our Services
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  PT DEMODA TEXTILE OFFICIAL provides the following services:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Custom Textile Design:</strong> Bespoke textile design solutions for fashion and industrial needs</li>
                  <li><strong>Fashion Production:</strong> Full-service apparel production from design to final product</li>
                  <li><strong>Supply Chain Management:</strong> Comprehensive textile and apparel supply chain solutions</li>
                  <li><strong>Consultation Services:</strong> Expert advice on textile selection and fashion trends</li>
                  <li><strong>B2B Solutions:</strong> Industrial fabric supply and bulk manufacturing services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                Client Responsibilities
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>As a client of PT DEMODA TEXTILE OFFICIAL, you agree to:</p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate and complete information for your orders</li>
                  <li>Specify design requirements clearly and in detail</li>
                  <li>Respond promptly to communications regarding your orders</li>
                  <li>Make payments according to agreed terms and schedules</li>
                  <li>Respect intellectual property rights and copyright laws</li>
                  <li>Provide feedback on samples and prototypes in a timely manner</li>
                  <li>Accept delivery of products according to agreed specifications</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <CreditCard className="w-6 h-6 text-purple-600 mr-3" />
                Ordering and Payment Terms
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Order Process</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>All orders must be confirmed in writing (email or official document)</li>
                    <li>Minimum order quantities may apply for certain products</li>
                    <li>Production timelines will be provided upon order confirmation</li>
                    <li>Design specifications must be approved before production begins</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>50% deposit required to commence production</li>
                    <li>Balance payment due upon completion before delivery</li>
                    <li>Payment methods: Bank transfer, credit card (subject to fees)</li>
                    <li>Late payments may incur interest charges</li>
                    <li>All prices are in Indonesian Rupiah (IDR) unless otherwise specified</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                Intellectual Property Rights
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  All designs, patterns, and creative works produced by PT DEMODA TEXTILE OFFICIAL 
                  are protected by intellectual property laws. The following terms apply:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Custom Designs:</strong> Clients retain rights to custom designs after full payment</li>
                  <li><strong>Template Designs:</strong> PT DEMODA TEXTILE OFFICIAL retains rights to template and stock designs</li>
                  <li><strong>Modifications:</strong> Any modifications to designs must be approved in writing</li>
                  <li><strong>Reproduction:</strong> Unauthorized reproduction of designs is prohibited</li>
                  <li><strong>Attribution:</strong> Credit may be required for certain design uses</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-purple-600 mr-3" />
                Limitation of Liability
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  PT DEMODA TEXTILE OFFICIAL shall not be liable for any indirect, incidental, 
                  special, or consequential damages arising from the use of our services.
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Our liability is limited to the value of the specific order or service</li>
                  <li>We are not responsible for delays caused by third parties or force majeure events</li>
                  <li>Color variations may occur due to dye lot differences and monitor settings</li>
                  <li>Natural fabric characteristics and variations are not considered defects</li>
                  <li>We recommend ordering samples for color and texture verification</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termination</h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Either party may terminate the service agreement under the following conditions:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Written notice of termination with 30 days advance notice</li>
                  <li>Breach of terms that is not remedied within 15 days of notice</li>
                  <li>Force majeure events preventing service delivery</li>
                  <li>Mutual agreement between both parties</li>
                </ul>
                
                <p>
                  Upon termination, clients are responsible for payment of all work completed 
                  up to the termination date.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  For questions about these Terms and Conditions, please contact us:
                </p>
                
                <div className="space-y-2">
                  <p><strong>Company:</strong> PT DEMODA TEXTILE OFFICIAL</p>
                  <p><strong>Address:</strong> Plaza Lotte Fatmawati, Jl. RS. Fatmawati Raya No.15 Blok B 3, 
                  Cilandak Barat, Cilandak, Jakarta Selatan, DKI Jakarta 12420</p>
                  <p><strong>Phone:</strong> 082312044648</p>
                  <p><strong>Email:</strong> legal@demodatextile.com</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM WIB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}