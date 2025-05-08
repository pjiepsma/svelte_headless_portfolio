export const stagingConfig = {
    secret: process.env.PAYLOAD_SECRET,
    url: '<YOUR_BACKEND_URL>',
    databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/ddbase',
    title: 'Titel',
    corsCsrfUrls: [
        'http://frontend:3000',
        'http://backend:4000',
        'http://frontend:3000',
    ],
    frontendUrl: 'http://frontend:3000',
}