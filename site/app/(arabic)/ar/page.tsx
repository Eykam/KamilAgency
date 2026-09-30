import type { Metadata } from "next"
import Link from "next/link"

import { ArabicServicePage } from "@/components/arabic-service-page"

export const metadata: Metadata = {
  title: "خدمات التأمين بالعربية في واشنطن العاصمة",
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
      <h2>كيف نساعدك على المقارنة؟</h2>
      <p>
        نبدأ بفهم احتياجاتك والتغطية الموجودة لديك إن وجدت. بعد ذلك نشرح حدود
        التأمين ومبالغ التحمل والاستثناءات المهمة، ونساعدك على مقارنة الخيارات
        المتاحة من شركات التأمين. هدف المحادثة هو أن تعرف ما الذي تدفع مقابله
        قبل اختيار الوثيقة.
      </p>
      <p>
        يمكنك طلب مساعدة لتأمين سيارة أو منزل أو وحدة سكنية أو عقار مؤجر أو نشاط
        تجاري. تعتمد الأسعار والأهلية على معلومات الطلب وقواعد الاكتتاب، لذلك قد
        نطلب تفاصيل عن السائقين أو العقار أو عمليات الشركة حتى تكون المقارنة
        دقيقة.
      </p>
      <h2>ما الذي يمكنك تحضيره؟</h2>
      <ul>
        <li>نسخة من وثيقتك الحالية إذا كنت تريد مقارنة التغطية.</li>
        <li>بيانات السائقين والمركبات لطلب تأمين السيارات.</li>
        <li>عنوان العقار وخصائصه الأساسية لتأمين المنزل.</li>
        <li>وصف نشاط الشركة والمواقع والموظفين والمركبات لتأمين الأعمال.</li>
      </ul>
      <h2>خدمة محلية بثلاث لغات</h2>
      <p>
        يقع مكتب وكالة كامل في واشنطن العاصمة، ويقدم الفريق الخدمة بالعربية
        والإنجليزية والإسبانية. يمكنك بدء الطلب عبر الإنترنت أو الاتصال على
        ‎(240) 400-7393 لطرح أسئلتك وتحديد الخطوة التالية.
      </p>
    </ArabicServicePage>
  )
}
