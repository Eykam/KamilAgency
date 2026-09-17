import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://vitals.vercel-insights.com",
  "frame-src https://www.google.com https://maps.google.com",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), geolocation=(), microphone=()",
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/policy/privacy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/policy/terms",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/contact-us#hours-and-locations",
        permanent: true,
      },
      {
        source: "/team/mohamed-kamil",
        destination: "/about-us/team/mohamed-kamil",
        permanent: true,
      },
      {
        source: "/docs/documentation/:path*",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/in-progress",
        destination: "/docs",
        permanent: true,
      },
    ]
  },
}

export default withContentlayer(nextConfig)
