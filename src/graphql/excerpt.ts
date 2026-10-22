import type { TypedObject } from 'sanity';

type TextBlock = { _type: 'block'; children?: { text?: string }[] };

const MAX_LENGTH = 160;

export const getExcerpt = (blocks: TypedObject[] | undefined) => {
  const block = blocks?.find(
    (item): item is TextBlock & TypedObject =>
      item._type === 'block' &&
      ((item as TextBlock).children ?? []).some((child) => child.text?.trim()),
  );
  const text = (block?.children ?? [])
    .map((child) => child.text ?? '')
    .join('')
    .trim();
  if (text.length <= MAX_LENGTH) return text || undefined;

  const cut = text.slice(0, MAX_LENGTH);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};
