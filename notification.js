function normalizeRecipients(value) {
  if (typeof value !== 'string') return [];

  return [...new Set(value
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))];
}

module.exports = { normalizeRecipients };
