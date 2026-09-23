import RootDocument, { metadata } from "@/components/root-document"
import MarketingShell from "@/components/marketing-shell"

export { metadata }

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="ar" dir="rtl">
      <MarketingShell>{children}</MarketingShell>
    </RootDocument>
  )
}
