"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, Clock, CheckCircle2, Sparkles } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-hover/10 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-hover" />
          <span className="text-sm font-semibold text-hover">Get in Touch</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Start a <span className="text-hover">Conversation</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a question or want to work together? We'd love to hear from you and help bring your creative vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information Cards */}
        <div className="lg:col-span-1 space-y-6">
          {/* Email Card */}
          <Card className="p-6 border-2 border-transparent hover:border-hover/50 transition-all duration-300 group animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-hover to-hover/80 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-lg">Email Us</h3>
                <a href="mailto:support@gokits.art" className="text-muted-foreground hover:text-hover transition-colors block">
                  support@gokits.art
                </a>
                <a href="mailto:sales@gokits.art" className="text-muted-foreground hover:text-hover transition-colors block">
                  sales@gokits.art
                </a>
              </div>
            </div>
          </Card>

          {/* Phone Card */}
          <Card className="p-6 border-2 border-transparent hover:border-hover/50 transition-all duration-300 group animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-hover to-hover/80 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-lg">Call Us</h3>
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-hover transition-colors block">
                  +1 (555) 123-4567
                </a>
                <p className="text-sm text-muted-foreground mt-1">Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
          </Card>

          {/* Address Card */}
          <Card className="p-6 border-2 border-transparent hover:border-hover/50 transition-all duration-300 group animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-hover to-hover/80 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-lg">Visit Us</h3>
                <p className="text-muted-foreground">123 Art Street</p>
                <p className="text-muted-foreground">Creative District, NY 10001</p>
              </div>
            </div>
          </Card>

          {/* Business Hours Card */}
          <Card className="p-6 border-2 border-transparent hover:border-hover/50 transition-all duration-300 group animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-hover to-hover/80 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-3 text-lg">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
          <Card className="p-8 md:p-10 border-2 border-transparent hover:border-hover/30 transition-all duration-300 shadow-xl bg-gradient-to-br from-background to-muted/20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    Name *
                    {formData.name && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`border-2 transition-all duration-300 ${
                      focusedField === "name"
                        ? "border-hover shadow-lg shadow-hover/20 scale-[1.02]"
                        : "border-input hover:border-hover/50"
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    Email *
                    {formData.email && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`border-2 transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-hover shadow-lg shadow-hover/20 scale-[1.02]"
                        : "border-input hover:border-hover/50"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                  Subject *
                  {formData.subject && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`border-2 transition-all duration-300 ${
                    focusedField === "subject"
                      ? "border-hover shadow-lg shadow-hover/20 scale-[1.02]"
                      : "border-input hover:border-hover/50"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  Message *
                  {formData.message && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`border-2 resize-none transition-all duration-300 ${
                    focusedField === "message"
                      ? "border-hover shadow-lg shadow-hover/20"
                      : "border-input hover:border-hover/50"
                  }`}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-hover to-hover/80 text-white hover:from-hover/90 hover:to-hover/70 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-hover/30 hover:shadow-xl hover:shadow-hover/40"
                size="lg"
                disabled={submitted}
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>

              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-center text-sm text-green-700 dark:text-green-300 font-medium">
                    🎉 Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
