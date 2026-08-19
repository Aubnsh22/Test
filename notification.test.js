const { normalizeRecipients } = require('./notification');

describe('normalizeRecipients', () => {
  test('normalizes, validates, and deduplicates project recipients', () => {
    expect(normalizeRecipients('QA@example.com, qa@example.com, invalid')).toEqual([
      'qa@example.com',
    ]);
  });

  test('returns an empty list for a missing configuration', () => {
    expect(normalizeRecipients()).toEqual([]);
  });
});
