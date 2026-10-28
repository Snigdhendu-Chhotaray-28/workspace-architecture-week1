import os from 'node:os';
import config from '../../config/environment.js';

/**
 * Core business logic for Welcome message and system inspection
 */
export function buildWelcomeMessage(customName) {
  const recipient = customName || config.intern.name;
  return `Hello World! Welcome to the engineering team, ${recipient}!`;
}

/**
 * Returns formatted runtime diagnostic info
 */
export function getSystemInspection() {
  const memTotalGb = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const memFreeGb = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
  
  return {
    appName: config.app.name,
    version: config.app.version,
    environment: config.env,
    intern: {
      name: config.intern.name,
      role: config.intern.role,
      mentor: config.intern.mentor
    },
    system: {
      platform: os.platform(),
      release: os.release(),
      arch: os.arch(),
      cpus: os.cpus().length,
      nodeVersion: process.version,
      memory: `${memFreeGb} GB free of ${memTotalGb} GB`
    },
    features: config.features
  };
}

/**
 * Key milestones for Week 1 Onboarding
 */
export const ONBOARDING_MILESTONES = Object.freeze([
  { id: 'M1', name: 'Workspace Scaffolding & Architecture', status: 'COMPLETED' },
  { id: 'M2', name: 'Toolchain & Environment Verification', status: 'COMPLETED' },
  { id: 'M3', name: 'Version Control & Git Conventions', status: 'COMPLETED' },
  { id: 'M4', name: 'Hello World Execution Milestone', status: 'IN_PROGRESS' },
  { id: 'M5', name: 'First Pull Request & Code Review', status: 'PENDING' }
]);
