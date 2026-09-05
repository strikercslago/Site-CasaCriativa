import tailwindcss from '@tailwindcss/postcss';
import { nitro } from 'nitro/vite';
import postcss from 'postcss';
import vinext from 'vinext';
import { defineConfig, type Plugin } from 'vite';

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

// Vinext builds RSC in a child Vite environment. Precompiling the global
// stylesheet keeps Tailwind's reset identical in every target environment.
function tailwindForVinext(): Plugin {
  return {
    name: 'casa-criativa:tailwind',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.replaceAll('\\', '/').endsWith('/app/globals.css')) return;
      const result = await postcss([tailwindcss()]).process(code, { from: id });
      return { code: result.css };
    },
  };
}

export default defineConfig({
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [tailwindForVinext(), vinext(), nitro()],
});
