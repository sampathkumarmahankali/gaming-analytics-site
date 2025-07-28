"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Search,
  BookOpen,
  Video,
  FileText,
  Send,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react"
import Layout from "@/components/layout"

export default function SupportPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setContactForm({ name: "", email: "", subject: "", message: "", priority: "medium" })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 2000)
  }

  const faqs = [
    {
      question: "How do I integrate PLAYLYTICS with my game?",
      answer: "Integration is simple! We provide SDKs for Unity, Unreal Engine, and other popular game engines. Our documentation includes step-by-step guides and code examples to get you started quickly."
    },
    {
      question: "What data does PLAYLYTICS collect?",
      answer: "We collect anonymous player behavior data, performance metrics, and engagement analytics. All data is encrypted and compliant with GDPR and CCPA regulations. You have full control over what data is collected."
    },
    {
      question: "Can I export my data?",
      answer: "Yes! You can export your data in multiple formats including CSV, JSON, and through our API. We believe in data portability and make it easy to access all your analytics data."
    },
    {
      question: "How accurate are the AI predictions?",
      answer: "Our AI models achieve 85-95% accuracy for most predictions. The accuracy improves over time as we learn from your specific game data and player behavior patterns."
    },
    {
      question: "What support do you offer?",
      answer: "We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. We also provide comprehensive documentation and video tutorials."
    }
  ]

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            We're Here to Help
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Get the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Support
            </span>{" "}
            You Need
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team is here to help you succeed. Get answers to your questions, technical support, or guidance on optimizing your gaming business.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
              status: "Online",
              color: "text-green-400",
              action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
              description: "Send us a detailed message",
              status: "24/7",
              color: "text-blue-400",
              action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
              description: "Talk to our experts directly",
              status: "Business Hours",
              color: "text-purple-400",
              action: "Call Now"
            }
          ].map((option, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                  </div>
                <h3 className="text-white font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${option.color.replace('text-', 'bg-')}`}></div>
                  <span className={`text-sm ${option.color}`}>{option.status}</span>
                  </div>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                  {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
      </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            <p className="text-gray-300 mb-8">
              Have a specific question or need technical support? Fill out the form and we'll get back to you within 24 hours.
            </p>

            {isSubmitted && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
                </div>
            </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  value={contactForm.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="What can we help you with?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority" className="text-white">Priority</Label>
                <Select value={contactForm.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                  placeholder="Describe your issue or question in detail..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </div>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Email Support</span>
                  <Badge className="bg-green-500/20 text-green-300">24 hours</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Live Chat</span>
                  <Badge className="bg-blue-500/20 text-blue-300">Instant</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Phone Support</span>
                  <Badge className="bg-purple-500/20 text-purple-300">2 hours</Badge>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Monday - Friday: 9 AM - 6 PM EST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Saturday: 10 AM - 4 PM EST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-white font-semibold mb-2">Need Immediate Help?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Check our knowledge base for instant answers to common questions.
              </p>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Knowledge Base
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Find quick answers to common questions</p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
        </div>
      </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 border border-white/10 rounded-lg">
                  <AccordionTrigger className="text-white hover:text-cyan-300 px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Documentation",
                description: "Comprehensive guides and API references",
                link: "#"
              },
              {
                icon: Video,
                title: "Video Tutorials",
                description: "Step-by-step video guides",
                link: "#"
              },
              {
                icon: FileText,
                title: "Case Studies",
                description: "Learn from successful implementations",
                link: "#"
              }
            ].map((resource, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
