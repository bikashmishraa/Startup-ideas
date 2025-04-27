import Navbar from "../components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  )
}