"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts"
import {
  TrendingUp, 
  Users,
  DollarSign, 
  Gamepad2, 
  Clock, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Zap
} from "lucide-react"
import Layout from "@/components/layout"

// Mock data for charts
const revenueData = [
  { name: "Jan", revenue: 45000, players: 125000 },
  { name: "Feb", revenue: 52000, players: 138000 },
  { name: "Mar", revenue: 48000, players: 132000 },
  { name: "Apr", revenue: 61000, players: 145000 },
  { name: "May", revenue: 55000, players: 142000 },
  { name: "Jun", revenue: 67000, players: 158000 },
]

const playerRetentionData = [
  { day: 1, retention: 100 },
  { day: 7, retention: 68 },
  { day: 30, retention: 42 },
  { day: 60, retention: 28 },
  { day: 90, retention: 22 },
]

const gamePerformanceData = [
  { name: "Mobile Legends", revenue: 25000, players: 45000, retention: 75 },
  { name: "PUBG Mobile", revenue: 18000, players: 32000, retention: 68 },
  { name: "Free Fire", revenue: 22000, players: 38000, retention: 72 },
  { name: "Call of Duty", revenue: 15000, players: 28000, retention: 65 },
  { name: "Genshin Impact", revenue: 30000, players: 52000, retention: 82 },
]

const playerSegments = [
  { name: "Whales", value: 5, color: "#10B981" },
  { name: "Dolphins", value: 15, color: "#3B82F6" },
  { name: "Minnows", value: 45, color: "#8B5CF6" },
  { name: "Free Players", value: 35, color: "#6B7280" },
]

export default function PlatformPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d")
  const [selectedGame, setSelectedGame] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleExportData = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Simulate export functionality
      alert("Data exported successfully!")
    }, 2000)
  }

  const handleOptimize = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("AI optimization applied! Revenue expected to increase by 12%")
    }, 3000)
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Gaming Analytics Dashboard</h1>
          <p className="text-gray-300">Real-time insights and performance metrics for your gaming portfolio</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedGame} onValueChange={setSelectedGame}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select game" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Games</SelectItem>
              <SelectItem value="mobile-legends">Mobile Legends</SelectItem>
              <SelectItem value="pubg">PUBG Mobile</SelectItem>
              <SelectItem value="free-fire">Free Fire</SelectItem>
              <SelectItem value="cod">Call of Duty</SelectItem>
              <SelectItem value="genshin">Genshin Impact</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button onClick={handleExportData} disabled={isLoading} variant="outline">
              {isLoading ? "Exporting..." : "Export Data"}
              </Button>
            <Button onClick={handleOptimize} disabled={isLoading} className="bg-gradient-to-r from-cyan-500 to-purple-500">
              {isLoading ? "Optimizing..." : "AI Optimize"}
              </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">$328K</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-green-400 text-sm">+12.5%</span>
                  </div>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Players</p>
                  <p className="text-2xl font-bold text-white">158K</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-green-400 text-sm">+8.2%</span>
                  </div>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Avg. Session</p>
                  <p className="text-2xl font-bold text-white">24m</p>
                  <div className="flex items-center mt-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400 mr-1" />
                    <span className="text-red-400 text-sm">-2.1%</span>
                  </div>
                </div>
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Retention Rate</p>
                  <p className="text-2xl font-bold text-white">68%</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-green-400 text-sm">+5.3%</span>
                  </div>
                </div>
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>
      </div>

        {/* Charts */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="retention">Retention</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#10B981" 
                        fill="#10B981" 
                        fillOpacity={0.3} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Player Segments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={playerSegments}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {playerSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Revenue by Game</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={gamePerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="revenue" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Player Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="players" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retention" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Player Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={playerRetentionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="retention" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

                {/* AI Insights */}
        <div id="ai-insights" className="scroll-mt-20">
          <Card className="bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-cyan-500/50 mt-8 mb-8 shadow-2xl backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
              <CardTitle className="text-white flex items-center text-xl font-bold">
                <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/30 backdrop-blur-sm">
                  <h4 className="text-white font-semibold mb-2">Revenue Opportunity</h4>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    Implementing personalized offers could increase revenue by 18% in the next 30 days.
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30 backdrop-blur-sm">
                  <h4 className="text-white font-semibold mb-2">Churn Risk</h4>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    12% of high-value players show signs of churn. Recommend engagement campaigns.
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/30 backdrop-blur-sm">
                  <h4 className="text-white font-semibold mb-2">Optimal Timing</h4>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    Push notifications at 8 PM show 34% higher engagement than other times.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
