import { type SchemaTypeDefinition } from 'sanity';
import { authorType } from './authorType';
import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { experienceType } from './experienceType';
import { featureBlock } from './featureBlockType';
import { localizedTitleType } from './localizedTitleType';
import { postType } from './postType';
import { projectType } from './projectType';
import { techStackType } from './techStackType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    techStackType,
    projectType,
    experienceType,
    featureBlock,
    localizedTitleType,
  ],
};
