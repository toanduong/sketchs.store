"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `${mode === "login" ? "Login" : "Sign up"} attempt with ${values.email}\n\nNote: This is a demo. Authentication not implemented.`,
    )
    setValues({ email: "", password: "", confirmPassword: "" })
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">{mode === "login" ? "Welcome Back" : "Create Account"}</h1>
            <p className="text-muted-foreground">
              {mode === "login" ? "Sign in to your account" : "Join us to start shopping"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {mode === "signup" && (
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}
            <Button type="submit" className="w-full">
              {mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="ml-2 text-primary font-semibold hover:underline"
              >
                {mode === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          <Link href="/" className="block">
            <Button variant="outline" className="w-full bg-transparent">
              Back to Shopping
            </Button>
          </Link>
        </div>
      </Card>
    </main>
  )
}
