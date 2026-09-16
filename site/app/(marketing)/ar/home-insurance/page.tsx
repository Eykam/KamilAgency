import type { Metadata } from "next"

import { ArabicCoveragePage } from "@/components/arabic-coverage-page"

export const metadata: Metadata = {
  title: "تأمين المنازل باللغة العربية في واشنطن",
  description:
    "مساعدة باللغة العربية لمراجعة تأمين المنزل أو الشقة أو العقار المؤجر في واشنطن العاصمة.",
  alternates: {
    canonical: "/ar/home-insurance",
    languages: {
      "ar-US": "/ar/home-insurance",
      "en-US": "/services/homeowners-insurance",
    },
  },
}

export default function ArabicHomeInsurancePage() {
  return (
    <ArabicCoveragePage
      eyebrow="تأمين المنازل"
      title="حماية منزلك وممتلكاتك بخدمة عربية"
      description="نساعدك على مراجعة تغطية المبنى والممتلكات والمسؤولية وتكاليف المعيشة الإضافية."
      items={[
        {
          title: "المبنى والممتلكات",
          description:
            "مراجعة حدود إعادة البناء وحماية الأثاث والمقتنيات الشخصية.",
        },
        {
          title: "المسؤولية الشخصية",
          description: "فهم الحماية عند وقوع إصابة أو ضرر قد تكون مسؤولاً عنه.",
        },
        {
          title: "منازل وشقق وعقارات مؤجرة",
          description:
            "خيارات لأصحاب المنازل والوحدات السكنية والملاك حسب نوع العقار واستخدامه.",
        },
      ]}
    />
  )
}
