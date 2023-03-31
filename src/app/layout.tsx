import './globals.css'

export const metadata = {
  title: 'Dang Duy Nhat',
  description: 'NextJs Turtorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
