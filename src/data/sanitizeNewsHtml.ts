const ALLOWED_TAGS = new Set([
  'A', 'B', 'BLOCKQUOTE', 'BR', 'EM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'I', 'LI', 'OL', 'P', 'STRONG', 'U', 'UL',
]);
const DROP_CONTENT_TAGS = new Set(['IFRAME', 'OBJECT', 'SCRIPT', 'STYLE', 'SVG', 'TEMPLATE']);

export function sanitizeNewsHtml(html: string): string {
  const parsed = new DOMParser().parseFromString(html, 'text/html');
  const cleanNode = (node: Node): Node | null => {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent ?? '');
    if (!(node instanceof Element)) return null;
    if (DROP_CONTENT_TAGS.has(node.tagName)) return null;

    if (!ALLOWED_TAGS.has(node.tagName)) {
      const fragment = document.createDocumentFragment();
      Array.from(node.childNodes).forEach((child) => {
        const cleaned = cleanNode(child);
        if (cleaned) fragment.appendChild(cleaned);
      });
      return fragment;
    }

    const cleanElement = document.createElement(node.tagName.toLowerCase());
    if (node.tagName === 'A') {
      const href = node.getAttribute('href');
      if (href) {
        try {
          const url = new URL(href, window.location.origin);
          if (['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol)) {
            cleanElement.setAttribute('href', href);
            cleanElement.setAttribute('rel', 'noopener noreferrer');
          }
        } catch {
          // Invalid URLs are omitted while preserving the link text.
        }
      }
    }

    Array.from(node.childNodes).forEach((child) => {
      const cleaned = cleanNode(child);
      if (cleaned) cleanElement.appendChild(cleaned);
    });
    return cleanElement;
  };

  const output = document.createElement('div');
  Array.from(parsed.body.childNodes).forEach((node) => {
    const cleaned = cleanNode(node);
    if (cleaned) output.appendChild(cleaned);
  });
  return output.innerHTML;
}
