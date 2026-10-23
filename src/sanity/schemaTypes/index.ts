import { type SchemaTypeDefinition } from 'sanity';
import { blockContentType } from './blockContentType';
import { experienceType } from './experienceType';
import { featureBlock } from './featureBlockType';
import { featureCategoryType } from './featureCategoryType';
import { galleryImageType } from './galleryImageType';
import { localizedTextType } from './localizedTextType';
import { localizedTitleType } from './localizedTitleType';
import { projectDecisionType } from './projectDecisionType';
import { projectSectionType } from './projectSectionType';
import { projectStepType } from './projectStepType';
import { projectType } from './projectType';
import { techStackType } from './techStackType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    techStackType,
    projectType,
    experienceType,
    featureBlock,
    featureCategoryType,
    localizedTitleType,
    localizedTextType,
    projectSectionType,
    projectStepType,
    projectDecisionType,
    galleryImageType,
  ],
};
