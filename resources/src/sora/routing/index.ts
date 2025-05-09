export {default as Link} from './link';
import { useContext } from 'react';
import Router from "./router";
import RouterCtx from './router-context';

type Props = {
  resolve: (path: string) => any;
  setup: (options: {el: HTMLElement, App: any, props: any}) => void;
}

export function useRouter() {
  return useContext(RouterCtx)
}


export function createApp({resolve,setup}: Props) {
  const el = document.querySelector('script[type="data-props"]') as HTMLScriptElement
  const data = JSON.parse(el.innerHTML);

  document.title = `${data.props.title ?? 'Untitled'} | Sora`;

  setup({
    el: document.getElementById('root')!, 
    App: Router,
     props: {resolve, ...data}
  })
}