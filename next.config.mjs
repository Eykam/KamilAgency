import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
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
