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
            value: `*`
          },
        ],
        destination: '/',
        permanent: false
      },
    ]
  }
}
