import type { Metadata } from "next"

import { ArabicCoveragePage } from "@/components/arabic-coverage-page"

export const metadata: Metadata = {
  title: "تأمين السيارات باللغة العربية في واشنطن",
  description:
    "مساعدة باللغة العربية لمقارنة خيارات تأمين السيارات في واشنطن العاصمة.",
  alternates: {
    canonical: "/ar/auto-insurance",
    languages: {
      "ar-US": "/ar/auto-insurance",
      "en-US": "/services/auto-insurance",
      "es-US": "/es/seguro-de-auto",
    },
  },
}

export default function ArabicAutoInsurancePage() {
  return (
    <ArabicCoveragePage
      eyebrow="تأمين السيارات"
      title="افهم خيارات تأمين سيارتك باللغة العربية"
      description="نشرح حدود المسؤولية ومبالغ التحمل وخيارات حماية المركبة لمساعدتك على اتخاذ قرار واضح."
      items={[
        {
          title: "المسؤولية",
          description:
            "مراجعة الحدود التي تساعد في الحماية عند التسبب بإصابة أو ضرر للغير.",
        },
        {
          title: "حماية المركبة",
          description:
            "فهم خيارات التصادم والشامل ومبلغ التحمل المناسب لميزانيتك.",
        },
        {
          title: "خصومات محتملة",
          description:
            "مراجعة فرص الجمع بين الوثائق وسجل القيادة وخيارات الدفع حيثما كانت متاحة.",
        },
      ]}
    />
  )
}
