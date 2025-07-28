import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  Search,
  Calendar,
  User,
  ArrowRight,
  Lightbulb,
  Code,
  TrendingUp,
} from "lucide-react"

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "The Ultimate Guide to Gaming Analytics in 2024",
      excerpt:
        "Discover the latest trends and best practices in gaming analytics that are driving success for top gaming companies.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      category: "Analytics",
      readTime: "8 min read",
    },
    {
      title: "How AI is Revolutionizing Player Retention",
      excerpt: "Learn how machine learning algorithms can predict and prevent player churn before it happens.",
      author: "Mike Rodriguez",
      date: "Dec 12, 2024",
      category: "AI & ML",
      readTime: "6 min read",
    },
    {
      title: "Mobile Gaming Monetization Strategies That Work",
      excerpt:
        "Proven strategies to maximize revenue from your mobile gaming audience without hurting player experience.",
      author: "Emma Thompson",
      date: "Dec 10, 2024",
      category: "Monetization",
      readTime: "10 min read",
    },
  ]

  const guides = [
    {
      title: "Getting Started with PLAYLYTICS",
      description: "Complete setup guide for new users",
      type: "PDF Guide",
      icon: FileText,
    },
    {
      title: "API Documentation",
      description: "Comprehensive API reference and examples",
      type: "Documentation",
      icon: Code,
    },
    {
      title: "Best Practices Playbook",
      description: "Industry best practices for gaming analytics",
      type: "PDF Guide",
      icon: Lightbulb,
    },
    {
      title: "Integration Tutorials",
      description: "Step-by-step integration guides",
      type: "Video Series",
      icon: Video,
    },
  ]

  const webinars = [
    {
      title: "Maximizing Player LTV with Predictive Analytics",
      date: "Jan 18, 2024",
      time: "2:00 PM EST",
      status: "upcoming",
    },
    {
      title: "Advanced Segmentation Strategies",
      date: "Dec 20, 2024",
      time: "3:00 PM EST",
      status: "recorded",
    },
    {
      title: "Gaming Analytics Trends for 2024",
      date: "Dec 15, 2024",
      time: "1:00 PM EST",
      status: "recorded",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Resources to Help You{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Succeed
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our comprehensive library of guides, tutorials, case studies, and industry insights to maximize
              your gaming analytics potential.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search resources..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: FileText, title: "Documentation", count: "25+ Guides", color: "from-blue-500 to-cyan-500" },
              { icon: Video, title: "Video Tutorials", count: "15+ Hours", color: "from-purple-500 to-pink-500" },
              { icon: BookOpen, title: "Case Studies", count: "10+ Stories", color: "from-green-500 to-cyan-500" },
              { icon: TrendingUp, title: "Industry Reports", count: "5+ Reports", color: "from-orange-500 to-red-500" },
            ].map((category, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Blog Posts</h2>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">{post.category}</Badge>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-white text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Guides & Documentation */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Guides & Documentation</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold">{guide.title}</h3>
                        <Badge className="bg-white/10 text-gray-300 text-xs">{guide.type}</Badge>
                      </div>
                      <p className="text-gray-300 mb-4">{guide.description}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Webinars */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Webinars & Events</h2>

          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{webinar.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <span>{webinar.date}</span>
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        className={
                          webinar.status === "upcoming"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-blue-500/20 text-blue-300"
                        }
                      >
                        {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                      </Badge>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                      >
                        {webinar.status === "upcoming" ? "Register" : "Watch"}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Get the latest gaming analytics insights, tips, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
