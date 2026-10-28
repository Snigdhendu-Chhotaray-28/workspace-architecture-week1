import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { main } from '../src/index.js';
import config from '../config/environment.js';

describe('Smoke & Integration Tests', () => {
  it('should verify configuration loads correctly', () => {
    assert.equal(typeof config.server.port, 'number');
    assert.ok(config.app.version);
    assert.ok(['development', 'test', 'production'].includes(config.env));
  });

  it('should run main application flow with exit code 0', async () => {
    const exitCode = await main();
    assert.equal(exitCode, 0, 'Main application must resolve with exit code 0');
  });
});
