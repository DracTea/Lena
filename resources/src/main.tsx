import { createRoot } from 'react-dom/client';
import type { ComponentType } from 'react';
import { createApp } from '@/components/ui/router';

interface PageModule {
  default: ComponentType;
}

createApp({
  resolve: (name: string) => {
    const pages = import.meta.glob<PageModule>('./views/**/*.tsx', { eager: true })
    let pg = pages[`./views/${name}.tsx`]
    if (!pg) pg = pages[`./views/error.tsx`]

    return pg.default
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})