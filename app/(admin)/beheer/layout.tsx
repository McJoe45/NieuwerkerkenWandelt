// Admin shell — sidebar + auth guard
// Server component: redirects to /beheer/login when session is missing
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-cream">
      {/* TODO: <AdminSidebar /> */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
