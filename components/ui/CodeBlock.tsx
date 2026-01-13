import { cn } from '@/lib/utils';
import type { CodeBlockProps } from '@/types';

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    return code
      // Keywords
      .replace(
        /\b(import|from|const|await|new|async|def|print|curl)\b/g,
        '<span class="text-[#c678dd]">$1</span>'
      )
      // Strings
      .replace(
        /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g,
        '<span class="text-[var(--accent)]">$&</span>'
      )
      // Comments
      .replace(
        /(\/\/.*$|#(?!!).*$)/gm,
        '<span class="text-[#5c6370]">$1</span>'
      )
      // Properties/Methods
      .replace(
        /\.([a-zA-Z_][a-zA-Z0-9_]*)/g,
        '.<span class="text-[#61afef]">$1</span>'
      )
      // Object keys
      .replace(
        /([a-zA-Z_][a-zA-Z0-9_]*):/g,
        '<span class="text-[var(--accent-cyan)]">$1</span>:'
      );
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl border border-[var(--black-border)] bg-[var(--black-card)] shadow-[0_30px_80px_rgba(0,0,0,0.4)]',
        className
      )}
      dir="ltr"
    >
      <pre className="overflow-x-auto p-9 font-mono text-[13px] leading-8">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </pre>
    </div>
  );
}
