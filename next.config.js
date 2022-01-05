module.exports = {
  reactStrictMode: true,
  env: {
    apiUrl: process.env.API_URL,
  },
  images: {
    domains: [
        'staging.api.hotelwaze.com',
        'api2.hotelwaze.com',
        'localhost'
    ],
  },
}
