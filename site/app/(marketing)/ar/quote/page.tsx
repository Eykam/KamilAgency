import type { Metadata } from "next"

import { ArabicQuoteForm } from "@/components/arabic-quote-form"

export const metadata: Metadata = {
  title: "اطلب عرض تأمين باللغة العربية",
  description:
    "أرسل طلباً مختصراً للحصول على مساعدة باللغة العربية في تأمين السيارات أو المنازل أو الأعمال.",
  alternates: {
    canonical: "/ar/quote",
    languages: { "ar-US": "/ar/quote", "en-US": "/quote" },
  },
}

export default function ArabicQuotePage() {
  return (
    <main dir="rtl" lang="ar" className="container max-w-3xl py-16 md:py-24">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-primary">
          خدمة باللغة العربية
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
          ابدأ طلب التأمين
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-muted-foreground">
          أرسل المعلومات الأساسية فقط، وسيتواصل معك فريقنا لمناقشة احتياجاتك
          والخطوات التالية.
        </p>
      </div>
      <ArabicQuoteForm />
    </main>
  )
}
