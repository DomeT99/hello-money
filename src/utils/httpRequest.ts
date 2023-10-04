export async function hmGet<T>(url: string): Promise<T> {
  const res: T = await fetch(new URL(url, import.meta.url))
    .then((data) => data.json())
    .then((res) => res);

  return res;
}
export async function hmPost() {}
export async function hmPut() {}
export async function hmDelete() {}
