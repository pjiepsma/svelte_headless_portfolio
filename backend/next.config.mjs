import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const baseConfig = {
  serverRuntimeConfig: {
    PORT: 4000,
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/admin/',
        permanent: false,
      },
    ]
  },
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '/admin',
  images: {
    path: process.env.NODE_ENV === 'development' ? undefined : '/admin/_next/image',
  },
}

export default withPayload(baseConfig, { devBundleServerPackages: false })
