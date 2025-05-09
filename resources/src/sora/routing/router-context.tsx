import { createContext } from 'react';

const RouterCtx = createContext({
  path: '',
  push: (path: string) => { console.log(path) },
  update: (path: string) => { console.log(path) },
});

export default RouterCtx;