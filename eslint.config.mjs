import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  { ignores: ['src/graphql/**', 'sanity.types.ts', '.next/**'] },
];

export default eslintConfig;
