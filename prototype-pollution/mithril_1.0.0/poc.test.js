import { test } from '@playwright/test';
import { exploitFunction } from './function.js';
import { getPayload } from './payload.js';

test('prototype pollution in mithril', async () => {
    // Use Playwright's jsdom environment
    await test.use({
        use: {
            ignoreHTTPSErrors: true,
            storageState: null,
            viewport: { width: 800, height: 600 },
        },
    });

    const { getPayload } = require('./payload.js');
    const payload = getPayload();
    const query = payload.query;

    await exploitFunction(query);

    expect({}.polluted).toBe('yes');
});