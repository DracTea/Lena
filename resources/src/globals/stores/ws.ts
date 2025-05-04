
import { create } from 'zustand'

type Store = {
  ws: any;
  data: {[key: string]: any};
  init: () => Promise<void>;
  increment: () => void;
  decrement: () => void;
};

const useWs = create<Store>((set,get) => ({
  data: {counter:0 },
  ws: null,
  init : async () => {
    if(get().ws) return;
    const ws = {id: 0};

    const res = await fetch('/api/user/content',{method: 'POST'});
    const data = await res.json();

    set({ ws, data: {...get().data, ...data.content} });
  },
  increment: () => {
    set((state) => ({ data: {...state.data,counter: state.data.counter + 1} }));
  },
  decrement: () => {
    set((state) => ({ data: {...state.data,counter: state.data.counter - 1} }));
  },
}));


export default useWs;