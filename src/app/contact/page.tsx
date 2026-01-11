import { ContactForm } from "@/components/contact-form"
import { PageTransition } from "@/components/page-transition"

export default function Contact() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-20 pb-12 bg-background">
        <ContactForm />
      </main>
    </PageTransition>
  )
}
