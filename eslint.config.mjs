import coreWebVitals from 'eslint-config-next/core-web-vitals'

// ESLint 10 only reads flat config, so the old .eslintrc.json was silently
// dead — `npm run lint` had been failing to lint anything at all.
export default [
  { ignores: ['.next/**', 'node_modules/**', 'public/**', 'next-env.d.ts'] },
  ...coreWebVitals,
]
