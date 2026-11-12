import type { Metadata } from "next"
import Link from "next/link"

import { ArabicQuoteForm } from "@/components/arabic-quote-form"

export const metadata: Metadata = {
  title: "اطلب عرض تأمين باللغة العربية في واشنطن",
  description:
    "ابدأ طلب تأمين السيارات أو المنازل أو الأعمال باللغة العربية مع وكالة محلية تخدم واشنطن العاصمة وماريلاند وفرجينيا.",
  alternates: {
    canonical: "/ar/quote",
    languages: { "ar-US": "/ar/quote", "en-US": "/quote" },
  },
}

export default function ArabicQuotePage() {
  return (
    <main className="container max-w-5xl py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold text-primary">
          خدمة تأمين محلية باللغة العربية
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
          ابدأ طلب عرض التأمين باللغة العربية
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-muted-foreground">
          أرسل المعلومات الأساسية عن التأمين الذي تبحث عنه، وسيتواصل معك فريق
          وكالة كامل لمراجعة احتياجاتك والخطوات التالية في واشنطن العاصمة أو
          ماريلاند أو فرجينيا.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="tel:+12404007393"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground"
          >
            اتصل على ‎(240) 400-7393
          </a>
          <Link
            href="/contact-us"
            className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 font-medium"
          >
            معلومات الاتصال والمكتب
          </Link>
        </div>
      </div>

      <section aria-labelledby="insurance-options" className="mb-12">
        <h2
          id="insurance-options"
          className="text-center font-heading text-3xl font-bold"
        >
          اختر نوع التأمين الذي تحتاجه
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/ar/auto-insurance"
            className="rounded-2xl border bg-background p-6 shadow-sm transition-colors hover:border-primary"
          >
            <span className="block text-xl font-bold">تأمين السيارات</span>
            <span className="mt-2 block leading-7 text-muted-foreground">
              راجع المسؤولية ومبالغ التحمل وخيارات حماية المركبة.
            </span>
          </Link>
          <Link
            href="/ar/home-insurance"
            className="rounded-2xl border bg-background p-6 shadow-sm transition-colors hover:border-primary"
          >
            <span className="block text-xl font-bold">تأمين المنازل</span>
            <span className="mt-2 block leading-7 text-muted-foreground">
              خيارات للمنازل والوحدات السكنية والممتلكات المؤجرة.
            </span>
          </Link>
          <Link
            href="/ar/business-insurance"
            className="rounded-2xl border bg-background p-6 shadow-sm transition-colors hover:border-primary"
          >
            <span className="block text-xl font-bold">تأمين الأعمال</span>
            <span className="mt-2 block leading-7 text-muted-foreground">
              راجع المسؤولية والممتلكات والعمال والسيارات التجارية.
            </span>
          </Link>
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="h-fit rounded-2xl bg-secondary p-7">
          <h2 className="font-heading text-2xl font-bold">
            ماذا يحدث بعد إرسال الطلب؟
          </h2>
          <ol className="mt-5 space-y-4 leading-7 text-muted-foreground">
            <li>
              <strong className="text-foreground">1. نراجع طلبك.</strong> نتأكد
              من نوع التأمين ومعلومات الاتصال الأساسية.
            </li>
            <li>
              <strong className="text-foreground">2. نتواصل معك.</strong> قد
              نطلب تفاصيل إضافية عن السائقين أو العقار أو النشاط التجاري.
            </li>
            <li>
              <strong className="text-foreground">3. نشرح الخيارات.</strong>
              نساعدك على فهم الحدود ومبالغ التحمل والاستثناءات قبل اتخاذ القرار.
            </li>
          </ol>
          <p className="mt-6 border-t pt-5 text-sm leading-7 text-muted-foreground">
            لا يضمن إرسال النموذج قبول الطلب أو إصدار التغطية. تعتمد الأسعار
            والأهلية على شركة التأمين وقواعد الاكتتاب ومعلومات الطلب.
          </p>
        </aside>

        <section
          aria-labelledby="arabic-quote-form-heading"
          className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8"
        >
          <h2
            id="arabic-quote-form-heading"
            className="font-heading text-3xl font-bold"
          >
            أرسل طلبك
          </h2>
          <p className="mb-7 mt-3 leading-8 text-muted-foreground">
            أكمل الحقول التالية بالمعلومات الأساسية فقط. لا ترسل رقم الضمان
            الاجتماعي أو معلومات الدفع أو أي بيانات شخصية حساسة.
          </p>
          <ArabicQuoteForm />
        </section>
      </div>

      <section className="mx-auto mt-12 max-w-3xl text-center">
        <h2 className="font-heading text-2xl font-bold">
          تفضل البدء بمحادثة؟
        </h2>
        <p className="mt-3 leading-8 text-muted-foreground">
          اتصل على ‎(240) 400-7393 للحصول على المساعدة باللغة العربية، أو ارجع
          إلى <Link href="/ar">صفحة خدمات التأمين العربية</Link> لمعرفة المزيد
          عن الخيارات المتاحة.
        </p>
      </section>
    </main>
  )
}
