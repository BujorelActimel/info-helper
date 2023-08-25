import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
  return (
    <div>
      <p>DashboardPage (users-only)</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default DashboardPage