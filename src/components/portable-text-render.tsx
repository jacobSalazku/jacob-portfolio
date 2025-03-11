'use client';

import React from 'react';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { IconChevronRight } from '@tabler/icons-react';
import { TypedObject } from 'sanity';
import { TextImageComponent } from './text-image';

export const components: PortableTextComponents = {
  types: {
    image: TextImageComponent,
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="mb-4 text-3xl font-semibold">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 text-2xl font-semibold">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-4 text-xl font-semibold text-beige-1">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mb-4 text-lg font-semibold">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="mb-4">{children}</blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => {
      // Split the children by newlines and map them to <br /> tags
      const formattedText = String(children)
        .split('\n')
        .map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ));

      return (
        <p className="mb-4" style={{ whiteSpace: 'pre-wrap' }}>
          {formattedText}
        </p>
      );
    },
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-4 ml-4 list-disc pl-5">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-4 ml-5 list-decimal pl-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="mb-3">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="mb-1">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong>{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
    link: ({
      value,
      children,
    }: {
      value?: { href: string };
      children: React.ReactNode;
    }) => (
      <Link
        href={value?.href || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center text-beige-1 transition-colors duration-200 ease-in-out hover:text-sky-100"
      >
        {children}
        <IconChevronRight
          className="ml-1 transition-all duration-300 ease-in-out group-hover:ml-2 group-hover:text-sky-100"
          size={24}
        />
      </Link>
    ),
  },
};

interface PortableTextRendererProps {
  value: TypedObject | TypedObject[];
}

const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({
  value,
}) => <PortableText value={value} components={components} />;

export default PortableTextRenderer;
