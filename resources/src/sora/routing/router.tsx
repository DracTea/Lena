import { useState, useRef, createElement, useEffect } from 'react';
import RouterCtx from './router-context';
import { ReactLenis } from 'lenis/react'
//import { Toaster } from 'sonner';

type Props = {
  template: string;
  props: { [k: string]: unknown };
  resolve: (name: string) => Promise<any> | any
};


function Router({ resolve, template, props }: Props) {
  const [routes, setRoutes] = useState({ [window.location.pathname]: { path: window.location.pathname, template, props } });
  const [current, setCurrent] = useState({ path: window.location.pathname, template, props, route: resolve(template)[0] });
  //const route = useRef(resolve(template)[0]);
  const Layout = useRef(resolve(template)[1]);

  async function push(path: string) {
    // const r = routes[path];
    // if (r) {
    //   const next = { path: r.path, template: r.template, props: r.props };
    //   setCurrent((prev) => ({ ...prev, ...next }));
    //   history.pushState({}, '', path);

    //   const [route, Layout] = resolve(r.template);
    //   route.current = route;
    //   Layout.current = Layout;
    //   return;
    // }

    const res = await fetch(path, {
      headers: { 'Accept': 'application/json' },
      method: 'GET'
    })

    if(res.headers.get('Redirect')) {
      const redirect = res.headers.get('Redirect') as string;
      return await push(redirect);
    }

    const rjson = await res.json()
    const { template, props } = rjson;
    const [route, layout] = resolve(template);
    
    Layout.current = layout;
    //route.current = route;

    setRoutes((prev) => ({ ...prev, [path]: { path, template, props } }));
    setCurrent((prev) => ({ ...prev, path, template, props, route: route }));

    history.pushState({}, '', path);
  }

  async function pop() {
    const path = window.location.pathname;
    const r = routes[path];

    if (r) {
      setCurrent((prev) => ({ ...prev, path: r.path, template: r.template, props: r.props }));

      const [route, Layout] = resolve(r.template);

      route.current = route;
      Layout.current = Layout;
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

    const [route, Layout] = resolve(template);
    route.current = route;
    Layout.current = Layout;
  }

  function update(path: string) {
    history.replaceState({}, '', path);
  }


  useEffect(() => {
    window.addEventListener('popstate', pop);
    return () => window.removeEventListener('popstate', pop);
  }, []);

  return (
    <>
      <ReactLenis root>
        <RouterCtx.Provider value={{ path: current.path, update, push }}>
          <Layout.current>
            {createElement(current.route, { ...current.props, key: current.path })}
          </Layout.current>
        </RouterCtx.Provider>
      </ReactLenis>
      {/* <Toaster position="top-center" /> */}
    </>
  )
}

export default Router