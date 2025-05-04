import { useState, useRef, createElement, useEffect } from 'react';
import { AuthLayout, GuestLayout } from '@/components/layouts';
import { Toaster } from 'sonner';
import RouterCtx from './router-context';

type Props = {
  template: string;
  props: { [k: string]: any };
  resolve: (name: string) => Promise<any> | any
};



function Router({ resolve, template, props }: Props) {
  const [routes, setRoutes] = useState({ [window.location.pathname]: { path: window.location.pathname, template, props } });
  const [current, setCurrent] = useState({ path: window.location.pathname, template, props });
  const route = useRef(resolve(template));
  const Layout = useRef(template.startsWith('authorized') ? AuthLayout : GuestLayout);

  async function navigate(path) {
    const r = routes[path];
    if (r) {
      const next = { path: r.path, template: r.template, props: r.props };
      setCurrent((prev) => ({ ...prev, ...next }));
      history.pushState({}, '', path);

      route.current = resolve(r.template);
      Layout.current = r.template.startsWith('authorized') ? AuthLayout : GuestLayout;
      document.title = `${r.props.title ?? 'Untitled'} | hermins`;
      return;
    }

    const res = await fetch(path, {
      headers: { 'Accept': 'application/json', },
      method: 'GET'
    })

    if(res.headers.get('Redirect')) {
      const redirect = res.headers.get('Redirect');
      return await navigate(redirect);
    }

    const rjson = await res.json()
    const { template, props } = rjson;

    setRoutes((prev) => ({ ...prev, [path]: { path, template, props } }));
    setCurrent((prev) => ({ ...prev, path, template, props }));
    history.pushState({}, '', path);

    route.current = resolve(template);
    Layout.current = template.startsWith('authorized') ? AuthLayout : GuestLayout;
    document.title = `${props.title ?? 'Untitled'} | hermins`;
    //console.log(template,path);
  }

  function update(path) {
    history.replaceState({}, '', path);
  }

  async function pop() {
    const path = window.location.pathname;
    const r = routes[path];

    if (r) {
      setCurrent((prev) => ({ ...prev, path: r.path, template: r.template, props: r.props }));

      route.current = resolve(r.template);
      Layout.current = r.template.startsWith('authorized') ? AuthLayout : GuestLayout;
      document.title = `${r.props.title ?? 'Untitled'} | hermins`;
      return;
    }

    const res = await fetch(path, {
      headers: { 'Accept': 'application/json', },
      method: 'GET'
    })

    const rjson = await res.json()
    const { template, props } = rjson;
    setRoutes((prev) => ({ ...prev, [path]: { path, template, props } }));
    setCurrent((prev) => ({ ...prev, path, template, props }));


    route.current = resolve(template);
    Layout.current = template.startsWith('authorized') ? AuthLayout : GuestLayout;
    document.title = `${props.title ?? 'Untitled'} | hermins`;
  }

  useEffect(() => {
    window.addEventListener('popstate', pop);
    return () => window.removeEventListener('popstate', pop);
  }, []);

  return (
    <>
      <RouterCtx.Provider value={{ path: current.path, update, navigate }}>
        <Layout.current>
          {createElement(route.current, { ...current.props, key: current.path })}
        </Layout.current>
      </RouterCtx.Provider>
      <Toaster position="top-center" />
    </>
  )
}

export default Router