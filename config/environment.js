import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Attempt to load .env file if it exists using Node's built-in or simple parser
const envPath = path.join(rootDir, '.env');
if (fs.existsSync(envPath)) {
  try {
    if (typeof process.loadEnvFile === 'function') {
      process.loadEnvFile(envPath);
    } else {
      const content = fs.readFileSync(envPath, 'utf8');
      for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...values] = trimmed.split('=');
          const value = values.join('=').replace(/^["'](.*)["']$/, '$1');
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = value;
          }
        }
      }
    }
  } catch (err) {
    console.warn(`[Config] Notice: Could not auto-load .env (${err.message}). Using system env.`);
  }
}

// Load default JSON configuration
const defaultConfigPath = path.join(__dirname, 'default.json');
let defaultConfig = {};
try {
  defaultConfig = JSON.parse(fs.readFileSync(defaultConfigPath, 'utf8'));
} catch (e) {
  defaultConfig = {};
}

/**
 * Consolidated Application Configuration
 */
export const config = Object.freeze({
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  app: {
    name: process.env.APP_NAME || defaultConfig.app?.name || 'Internship Workspace',
    version: process.env.APP_VERSION || defaultConfig.app?.version || '1.0.0',
    description: defaultConfig.app?.description || ''
  },
  server: {
    port: parseInt(process.env.PORT || defaultConfig.server?.port || '3000', 10),
    host: process.env.HOST || defaultConfig.server?.host || 'localhost'
  },
  intern: {
    name: process.env.INTERN_NAME || 'Engineering Intern',
    role: process.env.INTERN_ROLE || 'Fullstack Engineering Intern',
    mentor: process.env.MENTOR_NAME || 'Senior Mentor'
  },
  logging: {
    level: process.env.LOG_LEVEL || defaultConfig.logging?.level || 'info',
    showTimestamps: defaultConfig.logging?.showTimestamps ?? true
  },
  features: {
    enableMetrics: process.env.ENABLE_METRICS ? process.env.ENABLE_METRICS === 'true' : defaultConfig.features?.enableMetrics ?? true,
    enableDiagnostics: process.env.ENABLE_DIAGNOSTICS ? process.env.ENABLE_DIAGNOSTICS === 'true' : defaultConfig.features?.enableDiagnostics ?? true
  }
});

export default config;
