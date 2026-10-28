import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildWelcomeMessage, getSystemInspection, ONBOARDING_MILESTONES } from '../src/core/greeting.js';

describe('Greeting Core Module Tests', () => {
  it('should generate default welcome message', () => {
    const msg = buildWelcomeMessage();
    assert.match(msg, /Hello World! Welcome to the engineering team/);
  });

  it('should generate personalized welcome message when custom name provided', () => {
    const msg = buildWelcomeMessage('Alex Morgan');
    assert.equal(msg, 'Hello World! Welcome to the engineering team, Alex Morgan!');
  });

  it('should inspect system and return valid environment data', () => {
    const inspection = getSystemInspection();
    assert.ok(inspection.appName, 'App name must be defined');
    assert.ok(inspection.system.platform, 'Platform must be defined');
    assert.ok(inspection.system.nodeVersion.startsWith('v'), 'Node version should start with v');
    assert.ok(inspection.intern.name, 'Intern name must be defined');
  });

  it('should define structured onboarding milestones', () => {
    assert.ok(Array.isArray(ONBOARDING_MILESTONES), 'Milestones must be an array');
    assert.ok(ONBOARDING_MILESTONES.length >= 4, 'Should contain at least 4 milestones');
    for (const milestone of ONBOARDING_MILESTONES) {
      assert.ok(milestone.id, 'Milestone must have an id');
      assert.ok(milestone.name, 'Milestone must have a name');
      assert.ok(milestone.status, 'Milestone must have a status');
    }
  });
});
