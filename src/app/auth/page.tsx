import { AuthPage } from "@/components/auth-page"
import { PageTransition } from "@/components/page-transition"

export default function Auth() {
  return (
    <PageTransition>
      <AuthPage />
    </PageTransition>
  )
}
