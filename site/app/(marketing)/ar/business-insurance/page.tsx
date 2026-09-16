import type { Metadata } from "next"

import { ArabicCoveragePage } from "@/components/arabic-coverage-page"

export const metadata: Metadata = {
  title: "تأمين الأعمال باللغة العربية في واشنطن",
  description:
    "مساعدة باللغة العربية لمراجعة تأمين المسؤولية والممتلكات والسيارات التجارية والأعمال في واشنطن العاصمة.",
  alternates: {
    canonical: "/ar/business-insurance",
    languages: {
      "ar-US": "/ar/business-insurance",
      "en-US": "/services/commercial-insurance",
    },
  },
}

export default function ArabicBusinessInsurancePage() {
  return (
    <ArabicCoveragePage
      eyebrow="تأمين الأعمال"
      title="حلول تأمين للأعمال بشرح واضح باللغة العربية"
      description="نراجع طبيعة عملك وممتلكاته وموظفيه ومركباته والعقود المطلوبة للمساعدة في تحديد التغطيات المناسبة."
      items={[
        {
          title: "المسؤولية والممتلكات",
          description: "مراجعة الحوادث مع الغير ومعدات ومحتويات وموقع العمل.",
        },
        {
          title: "السيارات التجارية والعمال",
          description:
            "خيارات للمركبات المستخدمة في العمل وتعويض العمال عندما ينطبق ذلك.",
        },
        {
          title: "متطلبات العقود",
          description:
            "مساعدة في فهم حدود التأمين وشهادات التأمين ومتطلبات المالك أو العميل.",
        },
      ]}
    />
  )
}
