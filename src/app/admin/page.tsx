import { AdminDashboard } from "@/components/admin-dashboard"
import { PageTransition } from "@/components/page-transition"

export default function Admin() {
  return (
    <PageTransition>
      <AdminDashboard />
    </PageTransition>
  )
}
