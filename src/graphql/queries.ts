import { cache } from 'react';
import { executeGraphQL } from './execute-graphql';
import {
  GetExperienceBySlugDocument,
  GetExperiencesDocument,
  GetProjectBySlugDocument,
  GetProjectsDocument,
} from './graphql';
import { mapExperience, mapProject } from './mappers';

export const getProjects = cache(async () => {
  const { allProject } = await executeGraphQL(GetProjectsDocument, {});
  return allProject.map(mapProject);
});

export const getProject = cache(async (slug: string) => {
  const { allProject } = await executeGraphQL(GetProjectBySlugDocument, {
    slug,
  });
  return allProject[0] ? mapProject(allProject[0]) : null;
});

export const getExperiences = cache(async () => {
  const { allExperience } = await executeGraphQL(GetExperiencesDocument, {});
  return allExperience.map(mapExperience);
});

export const getExperience = cache(async (slug: string) => {
  const { allExperience } = await executeGraphQL(GetExperienceBySlugDocument, {
    slug,
  });
  return allExperience[0] ? mapExperience(allExperience[0]) : null;
});
