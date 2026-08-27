/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  /* A fully static export never reads the server file traces, but next build
     still collects them in a worker, which is what kept dying on the build
     machine. Nothing to trace, so trace nothing. */
  outputFileTracingExcludes: { '*': ['**/*'] },
};
export default nextConfig;
