import type { AstroIntegration } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** Remove dev-only routes from the static build output. */
export function excludeDevPages(routes: string[] = ['math-qa']): AstroIntegration {
  return {
    name: 'exclude-dev-pages',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        for (const route of routes) {
          const candidates = [
            path.join(outDir, route, 'index.html'),
            path.join(outDir, `${route}.html`),
          ];
          for (const file of candidates) {
            if (fs.existsSync(file)) {
              fs.rmSync(file, { force: true });
              logger.info(`Removed dev-only page ${file}`);
            }
          }
          const dirPath = path.join(outDir, route);
          if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
            fs.rmSync(dirPath, { recursive: true, force: true });
            logger.info(`Removed dev-only directory ${dirPath}`);
          }
        }
      },
    },
  };
}
