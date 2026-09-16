/**
 * Turn rehype-katex soft messages into hard build failures,
 * identifying the article from the VFile path.
 */
import type { Root } from 'hast';
import type { VFile } from 'vfile';

export function rehypeFailKatex() {
  return function transformer(_tree: Root, file: VFile) {
    const katexMessages = (file.messages ?? []).filter(
      (m) => m.source === 'rehype-katex',
    );
    if (katexMessages.length === 0) return;

    const articleLabel =
      file.path?.replace(/\\/g, '/').split('/').slice(-2).join('/') ??
      file.basename ??
      'unknown-article';

    const details = katexMessages
      .map((m) => {
        const cause = m.cause instanceof Error ? m.cause.message : String(m.reason);
        return `- ${cause}`;
      })
      .join('\n');

    throw new Error(
      `[KaTeX] Invalid math in article "${articleLabel}":\n${details}`,
    );
  };
}
