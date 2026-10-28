import { logger } from './utils/logger.js';
import { buildWelcomeMessage, getSystemInspection, ONBOARDING_MILESTONES } from './core/greeting.js';

/**
 * Main application execution entrypoint
 */
export async function main() {
  try {
    logger.banner('INTERNSHIP ONBOARDING WORKSPACE', 'Milestone 7: "Hello World" Verification');

    const welcomeText = buildWelcomeMessage();
    logger.success(welcomeText);

    logger.info('Performing runtime inspection...');
    const inspection = getSystemInspection();
    
    console.log('\n--- Workspace Runtime Snapshot ---');
    console.log(`• App:         ${inspection.appName} (v${inspection.version})`);
    console.log(`• Environment: ${inspection.environment}`);
    console.log(`• Intern:      ${inspection.intern.name} [${inspection.intern.role}]`);
    console.log(`• Mentor:      ${inspection.intern.mentor}`);
    console.log(`• Platform:    ${inspection.system.platform} (${inspection.system.arch}) - ${inspection.system.cpus} cores`);
    console.log(`• Node.js:     ${inspection.system.nodeVersion}`);
    console.log(`• Memory:      ${inspection.system.memory}`);
    console.log('----------------------------------\n');

    logger.info('Tracking Week 1 Onboarding Milestones:');
    for (const milestone of ONBOARDING_MILESTONES) {
      const icon = milestone.status === 'COMPLETED' ? '✔' : milestone.status === 'IN_PROGRESS' ? '▶' : '○';
      console.log(`  ${icon} [${milestone.id}] ${milestone.name.padEnd(42)} [${milestone.status}]`);
    }

    console.log('');
    logger.success('Environment verified successfully! "Hello World" milestone achieved.');
    return 0;
  } catch (error) {
    logger.error('Execution failure during onboarding verification', error);
    process.exitCode = 1;
    return 1;
  }
}

import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Execute when run directly as main entrypoint
const currentFilePath = fileURLToPath(import.meta.url);
const invokedFilePath = process.argv[1] ? path.resolve(process.argv[1]) : '';

if (invokedFilePath === currentFilePath) {
  main().then((code) => {
    process.exit(code);
  });
}
