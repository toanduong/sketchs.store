"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold hover:text-hover transition-colors">
              Sketchs.Store
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Transforming creativity into premium art supplies since 2024. Quality materials for artists of all levels.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hover transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hover transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hover transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  Sketchbooks
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  Brushes
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  Watercolor
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-primary-foreground/80 hover:text-hover transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to get special offers, updates, and inspiration.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-primary placeholder:text-primary/50"
              />
              <Button
                type="submit"
                className="w-full bg-hover text-white hover:bg-hover/90"
                disabled={submitted}
              >
                {submitted ? (
                  "Subscribed!"
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Sketchs.Store. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-hover transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-hover transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm text-primary-foreground/60 hover:text-hover transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
