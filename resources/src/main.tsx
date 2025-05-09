import { createRoot } from 'react-dom/client';
import type { ComponentType } from 'react';
import { createApp } from '@/sora/routing';
import { GuestLayout, AuthLayout } from '@/components/layouts';
interface PageModule {
  default: ComponentType;
}

createApp({
  resolve: (name: string) => {
    const pages = import.meta.glob<PageModule>('./views/**/*.tsx', { eager: true })
    const pg = pages[`./views/${name}.tsx`]
    if (!pg) return [pages['./views/error.tsx'].default, GuestLayout]

    const Layout = name.includes('authorized/') ? AuthLayout : GuestLayout;
    return [pg.default, Layout]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})