import type { FC } from 'react';
import { STACK } from '@/utils/stack';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from './home/section-heading';

const Stack: FC = async () => {
  const t = await getTranslations('Home');

  return (
    <section>
      <SectionHeading title={t('stack')} subtitle={t('stackSub')} />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-beige-1/30"
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-white/15 text-[0.8125rem] text-white/85">
              {skill.short}
            </span>
            <span className="min-w-0">
              <span className="block text-[0.9375rem] font-normal text-white">
                {skill.name}
              </span>
              <span className="block text-xs font-light leading-snug text-white/50">
                {t(`stackDescriptions.${skill.key}`)}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Stack };
