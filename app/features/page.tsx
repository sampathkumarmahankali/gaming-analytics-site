"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Target, 
  TrendingUp, 
  Globe,
  Database,
  Play,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react"
import Layout from "@/components/layout"

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState("analytics")
  const [demoProgress, setDemoProgress] = useState(0)

  // Simulate demo progress
  useState(() => {
    const interval = setInterval(() => {
      setDemoProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 1000)
    return () => clearInterval(interval)
  })

  const features = [
    {
      id: "analytics",
      name: "Real-Time Analytics",
      description: "Monitor player behavior and game performance in real-time",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
      demo: {
        title: "Live Player Dashboard",
        metrics: [
          { label: "Active Players", value: "12,847", change: "+5.2%" },
          { label: "Revenue Today", value: "$45,230", change: "+12.1%" },
          { label: "Avg. Session", value: "24m 32s", change: "+2.3%" },
          { label: "Retention Rate", value: "68.5%", change: "+4.7%" }
        ]
      }
    },
    {
      id: "ai",
      name: "AI-Powered Insights",
      description: "Predict player behavior and optimize monetization",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      demo: {
        title: "Predictive Analytics",
        metrics: [
          { label: "Churn Risk", value: "12%", change: "-3.2%" },
          { label: "Revenue Forecast", value: "$52K", change: "+8.4%" },
          { label: "Player Lifetime", value: "6.2 months", change: "+1.1%" },
          { label: "Engagement Score", value: "8.7/10", change: "+0.3" }
        ]
      }
    },
    {
      id: "security",
      name: "Enterprise Security",
      description: "Bank-grade security with SOC2 compliance",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      demo: {
        title: "Security Dashboard",
        metrics: [
          { label: "Threats Blocked", value: "1,247", change: "+15%" },
          { label: "Uptime", value: "99.97%", change: "+0.02%" },
          { label: "Data Encryption", value: "AES-256", change: "✓" },
          { label: "Compliance", value: "SOC2", change: "✓" }
        ]
      }
    }
  ]

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(featureId)
  }

  const handleTryDemo = () => {
    // Simulate demo functionality
    alert("Demo mode activated! You can now explore the interactive features.")
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Scale Your Gaming Business
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From player acquisition to retention, monetization to engagement - our comprehensive platform provides
            all the tools you need to optimize your gaming business.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature) => (
            <Button
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              className={`${
                activeFeature === feature.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
                  : "bg-white/5 border-white/20 text-white hover:bg-white/10"
              }`}
            >
              <feature.icon className="w-4 h-4 mr-2" />
              {feature.name}
            </Button>
          ))}
        </div>

        {/* Active Feature Demo */}
        <div className="mb-16">
          {features.map((feature) => (
            <div key={feature.id} className={activeFeature === feature.id ? "block" : "hidden"}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{feature.name}</h2>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{feature.demo.title}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.demo.metrics.map((metric, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <p className="text-gray-400 text-sm">{metric.label}</p>
                          <p className="text-white font-bold text-lg">{metric.value}</p>
                          <p className={`text-sm ${
                            metric.change.startsWith('+') ? 'text-green-400' : 
                            metric.change.startsWith('-') ? 'text-red-400' : 'text-cyan-400'
                          }`}>
                            {metric.change}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Demo Progress</span>
                        <span className="text-white text-sm">{demoProgress}%</span>
                      </div>
                      <Progress value={demoProgress} className="h-2" />
                    </div>

                    <Button onClick={handleTryDemo} className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0">
                      <Play className="w-4 h-4 mr-2" />
                      Try Interactive Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold">Live Preview</h3>
                        <Badge className="bg-green-500/20 text-green-300">Live</Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {feature.demo.metrics.map((metric, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-300">{metric.label}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-white font-semibold">{metric.value}</span>
                              <span className={`text-xs ${
                                metric.change.startsWith('+') ? 'text-green-400' : 
                                metric.change.startsWith('-') ? 'text-red-400' : 'text-cyan-400'
                              }`}>
                                {metric.change}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <p className="text-gray-300 text-sm">Real-time {feature.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Feature Comparison</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Analytics",
                features: [
                  { name: "Real-time dashboards", included: true },
                  { name: "Custom reports", included: true },
                  { name: "Data export", included: true },
                  { name: "API access", included: true },
                  { name: "Advanced filtering", included: true }
                ]
              },
              {
                category: "AI & ML",
                features: [
                  { name: "Player behavior prediction", included: true },
                  { name: "Churn prevention", included: true },
                  { name: "Revenue optimization", included: true },
                  { name: "Custom AI models", included: false },
                  { name: "Predictive analytics", included: true }
                ]
              },
              {
                category: "Security",
                features: [
                  { name: "SOC2 compliance", included: true },
                  { name: "Data encryption", included: true },
                  { name: "Access controls", included: true },
                  { name: "Audit logs", included: true },
                  { name: "GDPR ready", included: true }
                ]
              }
            ].map((category, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">{feature.name}</span>
                        {feature.included ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <div className="w-4 h-4 border border-gray-500 rounded-full" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Seamless Integrations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Unity", icon: "🎮" },
              { name: "Unreal Engine", icon: "⚡" },
              { name: "Steam", icon: "🚀" },
              { name: "Mobile Stores", icon: "📱" }
            ].map((integration, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-center hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{integration.icon}</div>
                  <h3 className="text-white font-semibold">{integration.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">One-click integration</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of gaming companies already using PLAYLYTICS to optimize their business and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
                             <Button className="border-white/20 text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6">
                  Schedule Demo
                </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
