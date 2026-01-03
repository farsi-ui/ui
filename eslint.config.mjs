import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'


const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',

      // ⛔ Ban physical directions (RTL-first enforcement)
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "Literal[value=/\\b(left|right|margin-left|margin-right|padding-left|padding-right)\\b/]",
          message:
            'Physical direction detected. Use logical properties (start/end, ms/me, ps/pe).',
        },
        {
          selector:
            "TemplateElement[value.raw=/\\b(left-|right-|ml-|mr-|pl-|pr-|text-left|text-right|border-l|border-r|translate-x)\\b/]",
          message:
            'Physical Tailwind utility detected. Use logical equivalents (start/end).',
        },
      ],

    },
  },

  // Optional: make UI kit stricter than rest of app
  {
    files: ['components/ui/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': 'error',
    },
  },

  // Override default ignores of eslint-config-next
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
