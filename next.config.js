module.exports = {
  reactStrictMode: true,
  env: {
    apiUrl: process.env.API_URL,
  },
  images: {
    domains: [
        'staging.api.hotelwaze.com',
        'localhost'
    ],
  },
}
