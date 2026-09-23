interface SpanishLayoutProps {
  children: React.ReactNode
}

export default function SpanishLayout({ children }: SpanishLayoutProps) {
  return <div lang="es" dir="ltr">{children}</div>
}
