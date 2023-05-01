/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'sproulclub44b893ace0574e03a41da91223ccdfdf202332-staging.s3.us-west-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
