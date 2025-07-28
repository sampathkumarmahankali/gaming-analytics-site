"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Star, Zap, Shield, Users, BarChart3, ArrowRight } from "lucide-react"
import Layout from "@/components/layout"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("pro")
  const [isLoading, setIsLoading] = useState(false)

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for indie game developers",
      price: { monthly: 29, annual: 24 },
      features: [
        "Up to 10,000 monthly active players",
        "Basic analytics dashboard",
        "Player behavior tracking",
        "Email support",
        "API access",
        "Basic reports"
      ],
      popular: false,
      icon: BarChart3
    },
    {
      id: "pro",
      name: "Professional",
      description: "For growing gaming studios",
      price: { monthly: 99, annual: 84 },
      features: [
        "Up to 100,000 monthly active players",
        "Advanced analytics & insights",
        "AI-powered predictions",
        "Priority support",
        "Custom dashboards",
        "Advanced reporting",
        "Revenue optimization",
        "Player segmentation"
      ],
      popular: true,
      icon: Zap
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large gaming companies",
      price: { monthly: 299, annual: 254 },
      features: [
        "Unlimited players",
        "Custom AI models",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false,
      icon: Shield
    }
  ]

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleStartTrial = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Simulate redirect to signup with plan selection
      window.location.href = `/signup?plan=${selectedPlan}&billing=${isAnnual ? 'annual' : 'monthly'}`
    }, 2000)
  }

  const getCurrentPrice = (plan: any) => {
    return isAnnual ? plan.price.annual : plan.price.monthly
  }

  const getSavings = (plan: any) => {
    const monthlyCost = plan.price.monthly * 12
    const annualCost = plan.price.annual * 12
    return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100)
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Analytics Plan
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with our free trial and scale as your gaming business grows. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-1">
            <span className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              !isAnnual ? 'bg-white/20 text-white' : 'text-gray-300'
            }`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-cyan-500"
            />
            <span className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isAnnual ? 'bg-white/20 text-white' : 'text-gray-300'
            }`}>
              Annual
            </span>
          </div>
          {isAnnual && (
            <Badge className="ml-4 bg-green-500/20 text-green-300 border-green-500/30">
              Save up to 20%
            </Badge>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative transition-all duration-300 ${
                selectedPlan === plan.id
                  ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/30 scale-105'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${getCurrentPrice(plan)}</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-400 text-sm mt-2">
                      Save ${getSavings(plan)}% with annual billing
                    </p>
                  )}
                </div>

                <Button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to transform your gaming business?
            </h3>
            <p className="text-gray-300 mb-6">
              Start your 14-day free trial today. No credit card required.
            </p>
            <Button
              onClick={handleStartTrial}
              disabled={isLoading}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-6"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              )}
            </Button>
            <p className="text-gray-400 text-sm mt-4">
              Selected plan: {plans.find(p => p.id === selectedPlan)?.name} 
              ({isAnnual ? 'Annual' : 'Monthly'} billing)
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "What's included in the free trial?",
                answer: "The free trial includes all features of the Professional plan for 14 days, no credit card required."
              },
              {
                question: "Do you offer custom pricing?",
                answer: "Yes, we offer custom pricing for enterprise customers with specific requirements."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees. You only pay for the plan you choose, starting from day one."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
