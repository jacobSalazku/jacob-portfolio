'use client';

import { Fragment } from 'react';
import { Link } from '@/navigation';
import { cn } from '@/utils/utils';
import { IconChevronRight } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

type BreadcrumbsItemProps = {
  label?: string;
  href: string;
};

type Breadcrumbs = {
  items: BreadcrumbsItemProps[];
};

const Breadcrumbs: React.FC<Breadcrumbs> = ({ items }) => {
  const t = useTranslations('Navigation');

  return (
    <section className="flex w-full justify-start px-6 py-4 md:px-8">
      <ul className="flex items-center space-x-2 text-base text-white/60">
        <li>
          <Link href="/home" className="font-thin hover:text-beige-1">
            {t('home')}
          </Link>
        </li>
        <IconChevronRight
          size={18}
          stroke={1.5}
          color="#fff0db"
          opacity={0.5}
        />
        {items.map((item, index) => (
          <Fragment key={index}>
            <li>
              <Link
                href={item.href}
                className={cn(
                  item === items[items.length - 1]
                    ? 'font-light text-beige-1'
                    : 'font-thin',
                  ' hover:text-beige-1',
                )}
              >
                {item.label}
              </Link>
            </li>
            {item === items[items.length - 1] ? null : (
              <IconChevronRight
                size={18}
                stroke={1.5}
                color="#fff0db"
                opacity={0.5}
              />
            )}
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export { Breadcrumbs };
