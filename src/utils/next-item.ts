// The item after the one with this slug, wrapping around to the first one.
// With fewer than two items there is nothing to link to.
export const getNextItem = <T extends { slug?: { current: string } }>(
  items: T[],
  slug: string,
): T | undefined => {
  if (items.length < 2) return undefined;
  const position = items.findIndex((item) => item.slug?.current === slug);
  return items[(position + 1) % items.length];
};
