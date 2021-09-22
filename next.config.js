module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/nocookie',
        has: [
          {
            type: 'cookie',
            key: 'accesstoken',
          },
        ],
        destination: '/',
        permanent: false
      },
    ]
  }
}
