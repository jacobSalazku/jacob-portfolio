const ALLOWED_PROTOCOLS = ['https:', 'http:', 'mailto:', 'tel:'];

// A link from the CMS, or undefined when it is not safe to render
// (javascript:, data: and other schemes). Paths like /projects pass.
export const getSafeHref = (value: string | null | undefined) => {
  const href = value?.trim();
  if (!href) return undefined;
  if (href.startsWith('/') && !href.startsWith('//')) return href;
  try {
    return ALLOWED_PROTOCOLS.includes(new URL(href).protocol)
      ? href
      : undefined;
  } catch {
    return undefined;
  }
};
