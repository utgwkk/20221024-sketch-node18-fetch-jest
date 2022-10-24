test('fetch', async () => {
  const resp = await fetch('https://example.com/')
  expect(resp.status).toBe(200)
});
