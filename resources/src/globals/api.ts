

export async function post(url: string, val: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(val),
  });

  if(!res.ok) {
    return {'status': 1, 'message': 'Error: ' + res.statusText};
  }

  try {
    return await res.json();
  } catch (e) {
    return {'status': 1, 'message': 'Error: ' + e};
  }
}