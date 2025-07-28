"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Zap, Shield, Target, Play, ArrowRight, Star, CheckCircle } from "lucide-react"
import Layout from "@/components/layout"
//@ts-ignore
export default function HomePage() {
  const [isDemoPlaying, setIsDemoPlaying] = useState(false)
  const [stats, setStats] = useState({
    companies: 500,
    rating: 4.9,
    revenue: 45.2,
    players: 128.5
  })

  // Animate stats on mount
  useEffect(() => {
    const animateStats = () => {
      const intervals = [
        setInterval(() => setStats(prev => ({ ...prev, companies: prev.companies + 1 })), 100),
        setInterval(() => setStats(prev => ({ ...prev, revenue: prev.revenue + 0.1 })), 200),
        setInterval(() => setStats(prev => ({ ...prev, players: prev.players + 0.5 })), 150)
      ]

      setTimeout(() => {
        intervals.forEach(clearInterval)
      }, 3000)

      return () => intervals.forEach(clearInterval)
    }

    const timer = setTimeout(animateStats, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleDemoClick = () => {
    setIsDemoPlaying(true)
    setTimeout(() => {
      setIsDemoPlaying(false)
      // Simulate demo completion
      alert("Demo completed! You've seen how PLAYLYTICS can transform your gaming analytics.")
    }, 5000)
  }

  const handleGetStarted = () => {
    // Check if user is logged in
    const authToken = localStorage.getItem("authToken")
    if (authToken) {
      window.location.href = "/platform"
    } else {
      window.location.href = "/signup"
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
                  <Zap className="w-4 h-4 mr-2" />
                  Next-Gen Gaming Intelligence
                </Badge>

                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Maximize Your Gaming{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Revenue
                  </span>{" "}
                  with Smart Analytics
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your gaming business with AI-driven insights that predict player behavior, optimize
                  monetization strategies, and boost engagement across all platforms.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-6"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={handleDemoClick}
                  disabled={isDemoPlaying}
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
                >
                  {isDemoPlaying ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Playing Demo...
                    </div>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-white/20"
                      ></div>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">{stats.companies.toLocaleString()}+ Gaming Companies</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">{stats.rating}/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Revenue Analytics</h3>
                    <Badge className="bg-green-500/20 text-green-300">+24.5%</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5 text-cyan-400" />
                          <div>
                            <p className="text-gray-300 text-sm">Daily Revenue</p>
                            <p className="text-white font-bold text-lg">${stats.revenue.toFixed(1)}K</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5 text-purple-400" />
                          <div>
                            <p className="text-gray-300 text-sm">Active Players</p>
                            <p className="text-white font-bold text-lg">{stats.players.toFixed(1)}K</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-end justify-center p-4">
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-gray-300 text-sm">Real-time Analytics Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">See PLAYLYTICS in Action</h2>
            <p className="text-xl text-gray-300">
              Discover how leading gaming companies are transforming their business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Player Behavior Prediction",
                description:
                  "AI-powered insights that predict player actions and optimize game experiences in real-time.",
                features: ["Real-time predictions", "Churn prevention", "Engagement optimization"]
              },
              {
                icon: Shield,
                title: "Revenue Protection",
                description: "Advanced fraud detection and churn prevention to safeguard your gaming revenue streams.",
                features: ["Fraud detection", "Revenue optimization", "Risk management"]
              },
              {
                icon: Zap,
                title: "Instant Optimization",
                description: "Real-time A/B testing and dynamic content optimization for maximum player engagement.",
                features: ["A/B testing", "Dynamic content", "Performance monitoring"]
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Gaming Business?</h2>
            <p className="text-gray-300 mb-8">
              Join thousands of gaming companies already using PLAYLYTICS to optimize their operations and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
