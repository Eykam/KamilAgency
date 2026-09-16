import type { Metadata } from "next"
import Link from "next/link"

import { ArabicServicePage } from "@/components/arabic-service-page"

export const metadata: Metadata = {
  title: "خدمات التأمين باللغة العربية في واشنطن العاصمة",
  description:
    "قارن خيارات تأمين السيارات والمنازل والأعمال مع وكالة تأمين محلية في واشنطن العاصمة تقدم خدمة باللغة العربية.",
  alternates: {
    canonical: "/ar",
    languages: { "en-US": "/", "es-US": "/es", "ar-US": "/ar" },
  },
}

export default function ArabicHomePage() {
  return (
    <ArabicServicePage>
      <h2>حماية لما يهمك</h2>
      <p>
        تساعد وكالة كامل سكان وأصحاب الأعمال في منطقة واشنطن العاصمة على فهم
        خيارات التأمين المتاحة. نستمع إلى أولوياتك ونشرح التغطية بلغة واضحة.
      </p>
      <h2>استكشف خدمات التأمين</h2>
      <div className="not-prose mt-6 grid gap-4 sm:grid-cols-3">
        <Link
          href="/ar/auto-insurance"
          className="rounded-xl border bg-background p-5 font-semibold shadow-sm hover:border-primary"
        >
          تأمين السيارات
        </Link>
        <Link
          href="/ar/home-insurance"
          className="rounded-xl border bg-background p-5 font-semibold shadow-sm hover:border-primary"
        >
          تأمين المنازل
        </Link>
        <Link
          href="/ar/business-insurance"
          className="rounded-xl border bg-background p-5 font-semibold shadow-sm hover:border-primary"
        >
          تأمين الأعمال
        </Link>
      </div>
      <h2>ابدأ بمحادثة بسيطة</h2>
      <p>
        اتصل بمكتبنا أو أرسل طلباً عبر الإنترنت. يمكن لأحد أعضاء فريقنا مساعدتك
        في تحديد المعلومات اللازمة لبدء عرض التأمين.
      </p>
    </ArabicServicePage>
  )
}
