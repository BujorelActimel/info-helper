import { UserButton } from "@clerk/nextjs"
import Sidebar from "@/components/Sidebar"

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-white">Dashboard Page (users-only)</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
