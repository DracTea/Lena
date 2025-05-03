import { createContext } from 'react';

const RouterCtx = createContext({
  path: '',
  navigate: (path: string) => { console.log(path) },
  update: (path: string) => { console.log(path) },
});

export default RouterCtx;