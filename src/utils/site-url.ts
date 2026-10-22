// Public base URL of the site, used for metadata. Falls back to localhost so a
// missing NEXT_BASE_URL never crashes rendering.
export const SITE_URL = process.env.NEXT_BASE_URL || 'http://localhost:3000';
