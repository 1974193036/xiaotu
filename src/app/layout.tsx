import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: '小途100',
  description:
    '小途100是汇集全网优质网址及资源的中文上网导航。及时收录影视、音乐、小说、游戏等分类的网址和内容，让您的网络生活更简单精彩。上网，从小途100开始。',
  keywords: '小途100,小途100导航,上网导航,网址大全,网址导航'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
