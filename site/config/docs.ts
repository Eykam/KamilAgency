import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    {
      title: "Library",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Insurance Library",
      items: [
        {
          title: "Insurance Basics",
          href: "/docs",
        },
        {
          title: "Home Insurance",
          href: "/docs#home-insurance",
        },
        {
          title: "Auto Insurance",
          href: "/docs#auto-insurance",
        },
        {
          title: "Commercial Insurance",
          href: "/docs#commercial-insurance",
        },
        {
          title: "Life Insurance",
          href: "/docs#life-insurance",
        },
      ],
    },
  ],
}
