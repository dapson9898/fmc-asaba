import { MouseEvent, ReactNode } from 'react';

interface LinkProps { href: string; className?: string; children: ReactNode; key?: string; }

export function Link({ href, className, children }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <a href={href} onClick={handleClick} className={className}>{children}</a>;
}