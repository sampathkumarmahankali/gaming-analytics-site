"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  email: string
  name: string
  plan?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  signup: (userData: { firstName: string; lastName: string; email: string; password: string }) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check for existing auth token on mount
    const authToken = localStorage.getItem("authToken")
    const userEmail = localStorage.getItem("userEmail")
    const userName = localStorage.getItem("userName")

    if (authToken && userEmail && userName) {
      setUser({
        email: userEmail,
        name: userName
      })
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "demo@playlytics.com" && password === "demo123") {
          const userData = {
            email,
            name: "Demo User"
          }
          setUser(userData)
          setIsAuthenticated(true)
          localStorage.setItem("authToken", "mock-jwt-token")
          localStorage.setItem("userEmail", email)
          localStorage.setItem("userName", userData.name)
          resolve(true)
        } else {
          resolve(false)
        }
      }, 1000)
    })
  }

  const signup = async (userData: { firstName: string; lastName: string; email: string; password: string }): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          email: userData.email,
          name: `${userData.firstName} ${userData.lastName}`
        }
        setUser(newUser)
        setIsAuthenticated(true)
        localStorage.setItem("authToken", "mock-jwt-token")
        localStorage.setItem("userEmail", userData.email)
        localStorage.setItem("userName", newUser.name)
        resolve(true)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("authToken")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 