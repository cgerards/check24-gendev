type CookieOptions = {
  path?: string;
  expires?: number | Date;
  maxAge?: number;
  secure?: boolean;
  sameSite?: 'lax' | 'strict' | 'none';
  [k: string]: any;
};

function encode(s: string) {
  return encodeURIComponent(s);
}

function decode(s: string) {
  return decodeURIComponent(s);
}

export function get(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=');
    const key = parts.shift();
    const val = parts.join('=');
    if (key === name) return decode(val || '');
  }
  return undefined;
}

export function set(name: string, value: string, options: CookieOptions = {}) {
  if (typeof document === 'undefined') return;
  let cookieStr = `${name}=${encode(String(value))}`;
  if (options.maxAge != null) cookieStr += `; Max-Age=${options.maxAge}`;
  if (options.expires) {
    const expires = typeof options.expires === 'number' ? new Date(Date.now() + options.expires * 1000) : options.expires;
    cookieStr += `; Expires=${expires.toUTCString()}`;
  }
  cookieStr += `; Path=${options.path ?? '/'};`;
  if (options.domain) cookieStr += ` Domain=${options.domain};`;
  if (options.secure) cookieStr += ' Secure;';
  if (options.sameSite) cookieStr += ` SameSite=${options.sameSite};`;
  document.cookie = cookieStr;
}

export function remove(name: string, options: { path?: string } = {}) {
  // set expiry in the past
  set(name, '', { path: options.path ?? '/', expires: new Date(0) });
}

const Cookies = { get, set, remove };
export default Cookies;
