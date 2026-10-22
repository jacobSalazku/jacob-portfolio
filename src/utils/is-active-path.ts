// A tab is active on its own page and on the pages below it, for example
// /projects stays selected on /projects/some-project. The pathname starts
// with the locale (/nl/projects).
export const isActivePath = (
  pathname: string,
  locale: string,
  href: string,
) => {
  const base = `/${locale}${href}`;
  return pathname === base || pathname.startsWith(`${base}/`);
};
