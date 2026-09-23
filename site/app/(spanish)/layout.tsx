import RootDocument, { metadata } from "@/components/root-document"
import MarketingShell from "@/components/marketing-shell"

export { metadata }

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="es" dir="ltr">
      <MarketingShell>{children}</MarketingShell>
    </RootDocument>
  )
}
