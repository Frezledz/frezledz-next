const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        },
      ],
    },
  }
/*
  const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}
*/
module.exports= nextConfig;