const PROXY_CONFIG = [
  {
    context: [
      '/foo/**',
      '/bar/**',
      '/api/**'
    ],
    target: "https://localhost:8443",
    secure: true
  }
]

module.exports = PROXY_CONFIG;
