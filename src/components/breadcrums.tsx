'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { AppPathnames } from '@/navigation';
import { cn } from '@/utils/utils';
import { IconChevronRight } from '@tabler/icons-react';

type BreadcrumbsItemProps = {
  label?: string;
  href: AppPathnames | string;
};
type Breadcrumbs = {
  items: BreadcrumbsItemProps[];
};

const Breadcrumbs: React.FC<Breadcrumbs> = ({ items }) => {
  return (
    <section className="flex w-full justify-start px-4 py-4 md:px-6 lg:px-10">
      <ul className="flex items-center space-x-2 text-lg text-white">
        <li>
          <Link href="/home" className="font-thin hover:text-beige-1">
            Home
          </Link>
        </li>
        <IconChevronRight size={24} stroke={1} color="#fff0db" />
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
              <IconChevronRight size={24} stroke={1} color="#fff0db" />
            )}
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Breadcrumbs;
