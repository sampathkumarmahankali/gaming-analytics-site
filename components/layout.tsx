"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { BarChart3, Menu, X, LogOut, User, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useAuth } from "./auth-context"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const productsDropdownRef = useRef<HTMLDivElement>(null)
  const { user, isAuthenticated, logout } = useAuth()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">PLAYLYTICS</h1>
              <p className="text-xs text-cyan-300">Analyze. Optimize. Dominate</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/platform" className="text-white hover:text-cyan-300 transition-colors">
              Platform
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
              <button 
                className="flex items-center text-white hover:text-cyan-300 transition-colors"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                Products
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-white/10 rounded-lg shadow-xl backdrop-blur-sm">
                  <div className="py-2">
                    <Link href="/products#ai-models" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
                      AI Models
                    </Link>
                    <Link href="/products#predictive-analytics" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
                      Predictive Analytics
                    </Link>
                    <Link href="/products#real-time-dashboards" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
                      Real-time Dashboards
                    </Link>
                    <Link href="/products#custom-reports" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
                      Custom Reports
                    </Link>
                    <Link href="/products#api-integration" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
                      API Integration
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/features" className="text-white hover:text-cyan-300 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-white hover:text-cyan-300 transition-colors">
              Pricing
            </Link>
            <Link href="/resources" className="text-white hover:text-cyan-300 transition-colors">
              Resources
            </Link>
            <Link href="/support" className="text-white hover:text-cyan-300 transition-colors">
              Support
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2 text-white">
                  <User className="w-4 h-4" />
                  <span>{user?.name}</span>
                </div>
                <Button onClick={logout} className="text-white hover:text-cyan-300 hover:bg-white/10 bg-transparent">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button className="text-white hover:text-cyan-300 hover:bg-white/10 bg-transparent">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                    Start Free Trial
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-purple-900/95 backdrop-blur-lg border-b border-white/10">
            <div className="px-6 py-4 space-y-4">
              <Link href="/platform" className="block text-white hover:text-cyan-300 transition-colors">
                Platform
              </Link>
              <Link href="/products" className="block text-white hover:text-cyan-300 transition-colors">
                Products
              </Link>
              <Link href="/features" className="block text-white hover:text-cyan-300 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block text-white hover:text-cyan-300 transition-colors">
                Pricing
              </Link>
              <Link href="/resources" className="block text-white hover:text-cyan-300 transition-colors">
                Resources
              </Link>
              <Link href="/support" className="block text-white hover:text-cyan-300 transition-colors">
                Support
              </Link>
              <div className="pt-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-2 text-white p-4">
                      <User className="w-4 h-4" />
                      <span>{user?.name}</span>
                    </div>
                    <Button onClick={logout} className="w-full text-white hover:text-cyan-300 hover:bg-white/10 bg-transparent">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/signin" className="block">
                      <Button className="w-full text-white hover:text-cyan-300 hover:bg-white/10 bg-transparent">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" className="block">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                        Start Free Trial
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {children}

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold">PLAYLYTICS</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering gaming companies with AI-driven analytics and insights.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/platform" className="block text-gray-400 hover:text-white text-sm">
                  Platform
                </Link>
                <Link href="/features" className="block text-gray-400 hover:text-white text-sm">
                  Features
                </Link>
                <Link href="/pricing" className="block text-gray-400 hover:text-white text-sm">
                  Pricing
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <Link href="/resources" className="block text-gray-400 hover:text-white text-sm">
                  Documentation
                </Link>
                <Link href="/resources" className="block text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
                <Link href="/support" className="block text-gray-400 hover:text-white text-sm">
                  Support
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white text-sm">
                  About
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white text-sm">
                  Careers
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white text-sm">
                  Privacy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex items-center justify-between">
            <p className="text-gray-400 text-sm">© 2024 PLAYLYTICS. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Powered by DataVision Labs</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
