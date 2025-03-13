import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('techStack').title('TechStack'),
      S.documentTypeListItem('experience').title('Experience'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['project', 'techStack', 'experience'].includes(item.getId()!),
      ),
    ]);
