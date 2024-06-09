import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/team/mohamed-kamil",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

export default withContentlayer(nextConfig)
