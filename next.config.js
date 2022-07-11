/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents:
      true |
      {
        ssr: true,
        displayName: true,
        pure: true,
      },
  },
}

module.exports = nextConfig
