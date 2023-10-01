import Sidebar from "@/components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className="flex">
        <Sidebar />
        {children}
    </body>
  )
}
