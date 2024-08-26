// eslint-disable-next-line no-restricted-imports
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  rules: [['custom-rule', { color: 'red' }]],
  shortcuts: {
    'custom-shortcut': 'text-lg text-red hover:text-orange fw-600',
  },
  presets: [
    presetUno({
      important: '#app',
    }),
    presetAttributify(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
