import './globals.css'

export const metadata = {
  title: 'Zyper',
  description: 'Zyper\'s portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#04020a] ">
        {children}
      </body>
    </html>
  )
}
