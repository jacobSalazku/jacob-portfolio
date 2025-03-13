import { type SchemaTypeDefinition } from 'sanity';
import { blockContentType } from './blockContentType';
import { experienceType } from './experienceType';
import { featureBlock } from './featureBlockType';
import { localizedTitleType } from './localizedTitleType';
import { projectType } from './projectType';
import { techStackType } from './techStackType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    techStackType,
    projectType,
    experienceType,
    featureBlock,
    localizedTitleType,
  ],
};
