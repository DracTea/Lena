import { nanoid } from 'nanoid';
export {toastSimple} from './toast';
export {post} from './api';

export function genId(len: number = 28): string {
  return nanoid(len);
}

export function t(name: string, domain: string = 'admin') {
  return name;
}

export function truncate(str: string, len: number): string {
  return str.length > len ? str.slice(0, len) + '...' : str;
}

export function asset(str: string, type: 'asset' | 'media' = 'asset'): string {
  // if (type === 'media') return window.__app__.media + str;
  // return window.__app__.asset + str;
  return str;
}

export function setValue(obj: { [k: string]: any }, key: string, value: any) {
  if (!key.includes('.')) {
    obj[key] = value;
    return obj;
  }

  // Split the key string into an array of keys
  const keys = key.split('.');
  const lastKey = keys.pop() as string;

  const lastObj = keys.reduce((obj, key) => {
    if (!obj[key] || typeof obj[key] !== 'object') {
      obj[key] = {};
    }
    return obj[key];
  }, obj);

  lastObj[lastKey] = value;
  return obj;
}

export function getValue<T = string>(obj: { [k: string]: any }, key: string, def: any = undefined): T {
  // Split the key string into an array of keys
  const keys = key.split('.');

  // Reduce over the keys array to access the nested property
  return keys.reduce((accumulator, currentKey) => {
    // Check if the accumulator is null or undefined before accessing the next level
    if (accumulator && currentKey in accumulator) {
      return accumulator[currentKey];
    }
    return def; // Return undefined if the path does not exist
  }, obj) as T;
}

export class Cookies {
  public static get(name: string): string | undefined {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : undefined;
  }

  public static set(name: string, value: string, days: number = 7): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  public static delete(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
};

export const debounce = (callback: any, wait: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, wait);
  };
};