"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Users, Award, Sparkles, Heart, Target, Zap, Shield } from "lucide-react"

export function AboutPage() {
  const stats = [
    { label: "Products", value: "500+", icon: Palette },
    { label: "Happy Customers", value: "10K+", icon: Users },
    { label: "Years Experience", value: "2+", icon: Award },
    { label: "Countries", value: "25+", icon: Sparkles },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Art",
      description: "We're artists ourselves, deeply committed to supporting the creative community with the best materials.",
    },
    {
      icon: Target,
      title: "Quality First",
      description: "Every product is carefully selected and tested to ensure it meets our high standards of excellence.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly seek out new and innovative art supplies to inspire your creative journey.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Fast shipping, secure payments, and exceptional customer service you can count on.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder-user.jpg",
      description: "Professional artist with 15 years of experience in watercolor and mixed media.",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/placeholder-user.jpg",
      description: "Former art teacher passionate about making quality supplies accessible to all.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Curator",
      image: "/placeholder-user.jpg",
      description: "Expert in art materials with a keen eye for quality and innovation.",
    },
  ]

  return (
    <main className="min-h-screen pt-20 pb-12 bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hover/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-hover/10 rounded-full">
                <Sparkles className="w-4 h-4 text-hover" />
                <span className="text-sm font-semibold text-hover">About GoKits.art</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering Artists with <span className="text-hover">Premium Supplies</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Since 2024, we've been dedicated to providing artists worldwide with the finest art supplies,
                exceptional service, and a passion for creativity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button className="bg-hover text-white hover:bg-hover/90 shadow-lg shadow-hover/30">
                    Browse Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-hover text-hover hover:bg-hover hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/art-supplies-still-life.png"
                  alt="Art supplies collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-hover/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="p-6 text-center border-2 border-transparent hover:border-hover/30 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-hover to-hover/80 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GoKits.art was born from a simple belief: every artist deserves access to premium quality materials
              that inspire creativity and enable masterpieces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a small collection of carefully curated art supplies has grown into a comprehensive
              destination for artists of all levels. We work directly with renowned manufacturers and emerging brands
              to bring you the finest sketchbooks, brushes, watercolors, and more.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-8 border-2 border-transparent hover:border-hover/30 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-hover to-hover/80 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <value.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate artists and professionals dedicated to serving the creative community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden border-2 border-transparent hover:border-hover/30 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-hover font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-2 border-hover/20 bg-gradient-to-br from-background to-muted/20 p-12 md:p-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hover/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your <span className="text-hover">Creative Journey?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of artists who trust GoKits.art for their creative needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button size="lg" className="bg-hover text-white hover:bg-hover/90 shadow-lg shadow-hover/30">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-hover text-hover hover:bg-hover hover:text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
