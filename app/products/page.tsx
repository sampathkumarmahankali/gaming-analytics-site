"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Code, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from "lucide-react"

const products = [
  {
    id: "ai-models",
    title: "AI Models",
    description: "Advanced machine learning models for player behavior prediction and game optimization",
    icon: Brain,
    features: [
      "Player churn prediction",
      "Revenue optimization",
      "Personalized recommendations",
      "Real-time scoring"
    ],
    pricing: "From $500/month",
    rating: 4.9,
    reviews: 127
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "Forecast player behavior and game performance with advanced statistical models",
    icon: TrendingUp,
    features: [
      "Player lifetime value prediction",
      "Game performance forecasting",
      "Market trend analysis",
      "Risk assessment"
    ],
    pricing: "From $300/month",
    rating: 4.8,
    reviews: 89
  },
  {
    id: "real-time-dashboards",
    title: "Real-time Dashboards",
    description: "Live monitoring and visualization of your gaming metrics and KPIs",
    icon: BarChart3,
    features: [
      "Live data streaming",
      "Customizable widgets",
      "Mobile responsive",
      "Real-time alerts"
    ],
    pricing: "From $200/month",
    rating: 4.7,
    reviews: 156
  },
  {
    id: "custom-reports",
    title: "Custom Reports",
    description: "Tailored reporting solutions for your specific business needs and stakeholders",
    icon: FileText,
    features: [
      "Automated report generation",
      "Multiple export formats",
      "Scheduled delivery",
      "White-label options"
    ],
    pricing: "From $150/month",
    rating: 4.6,
    reviews: 73
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Seamless integration with your existing systems and third-party platforms",
    icon: Code,
    features: [
      "RESTful API",
      "Webhook support",
      "SDK libraries",
      "Documentation & support"
    ],
    pricing: "From $400/month",
    rating: 4.9,
    reviews: 94
  }
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId)
  }

  const handleDemoRequest = (productTitle: string) => {
    // Simulate demo request
    alert(`Demo requested for ${productTitle}. Our team will contact you within 24 hours!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive gaming analytics solutions designed to transform your business with AI-powered insights
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon
            return (
              <Card 
                key={product.id}
                className={`bg-white/5 border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer ${
                  selectedProduct === product.id ? 'ring-2 ring-cyan-500' : ''
                }`}
                onClick={() => handleProductClick(product.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      {product.rating} ★
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">{product.pricing}</span>
                      <span className="text-gray-400 text-sm">{product.reviews} reviews</span>
                    </div>
                    
                    <div className="space-y-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDemoRequest(product.title)
                      }}
                    >
                      Request Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Ready to Transform Your Gaming Analytics?</h2>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get started with our comprehensive suite of gaming analytics tools. 
                Choose the products that fit your needs or bundle them for maximum value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 