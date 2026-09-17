interface ArabicLayoutProps {
  children: React.ReactNode
}

export default function ArabicLayout({ children }: ArabicLayoutProps) {
  return <div lang="ar" dir="rtl">{children}</div>
}
