const RESUME_URLS = {
  nl: process.env.NEXT_PUBLIC_RESUME_NL || '/resume-nl.pdf',
  en: process.env.NEXT_PUBLIC_RESUME_EN || '/resume-en.pdf',
} as const;

export const getResumeUrl = (locale: string) =>
  locale === 'nl' ? RESUME_URLS.nl : RESUME_URLS.en;
