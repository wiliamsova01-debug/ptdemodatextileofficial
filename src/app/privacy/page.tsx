'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, Users, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Privacy <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us at PT DEMODA TEXTILE OFFICIAL
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                PT DEMODA TEXTILE OFFICIAL ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website, use our services, or engage with our textile and fashion business.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Name and contact details (email, phone number, address)</li>
                    <li>Company information and business details</li>
                    <li>Communication preferences</li>
                    <li>Account credentials (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Business Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Textile and apparel requirements</li>
                    <li>Design preferences and specifications</li>
                    <li>Order history and transactions</li>
                    <li>Business relationship details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                How We Use Your Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700">Service Delivery</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Process textile and apparel orders</li>
                    <li>• Provide design consultations</li>
                    <li>• Manage production schedules</li>
                    <li>• Coordinate delivery and logistics</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700">Communication</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Respond to inquiries and requests</li>
                    <li>• Send order updates and notifications</li>
                    <li>• Share new collections and designs</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700">Business Development</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Improve our products and services</li>
                    <li>• Develop new textile designs</li>
                    <li>• Analyze market trends</li>
                    <li>• Enhance customer experience</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700">Legal Compliance</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Comply with applicable laws</li>
                    <li>• Protect our rights and property</li>
                    <li>• Prevent fraudulent activities</li>
                    <li>• Ensure workplace safety</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-purple-600 mr-3" />
                Data Protection and Security
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Access controls and authentication systems</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                  <li>Secure storage and backup systems</li>
                </ul>
                
                <p className="mt-4">
                  However, please note that no method of transmission over the internet or method of electronic 
                  storage is 100% secure. While we strive to use commercially acceptable means to protect your 
                  personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy Rights</h2>
              
              <div className="space-y-4 text-gray-600">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
                
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  If you have any questions about this Privacy Policy or how we handle your information, 
                  please contact us:
                </p>
                
                <div className="space-y-2">
                  <p><strong>Company:</strong> PT DEMODA TEXTILE OFFICIAL</p>
                  <p><strong>Address:</strong> Plaza Lotte Fatmawati, Jl. RS. Fatmawati Raya No.15 Blok B 3, 
                  Cilandak Barat, Cilandak, Jakarta Selatan, DKI Jakarta 12420</p>
                  <p><strong>Phone:</strong> 082312044648</p>
                  <p><strong>Email:</strong> privacy@demodatextile.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}