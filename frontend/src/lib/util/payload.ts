// src/lib/util/payload.ts
import { createClient } from 'payload-rest-client';
import type { Config } from 'payload-rest-client/dist/types';

// Define locales based on your setup
type Locales = 'nl'; // Adjust based on your available locales

// Initialize the Payload client with appropriate configuration
const client = createClient<Config, Locales>({
  apiUrl: 'http://localhost:4000/api', // Update with your Payload API URL
});

export default client;