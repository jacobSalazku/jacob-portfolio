// Public base URL of the site, used for metadata. Falls back to localhost so a
// missing NEXT_BASE_URL never crashes rendering.
export const SITE_URL = process.env.NEXT_BASE_URL || 'http://localhost:3000';

// Default social image, shared by pages that have no image of their own
export const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630 };
