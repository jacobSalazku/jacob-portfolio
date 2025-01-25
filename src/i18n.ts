import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './navigation';

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) return notFound();

  const messagesModule = (await import(`../messages/${locale}.json`)) as {
    default: Record<string, string>;
  };
  const messages = messagesModule.default;
  return {
    messages,
  };
});
