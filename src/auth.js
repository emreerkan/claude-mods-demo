const hits = new Map()
export function login(req, res) {
  const n = (hits.get(req.ip) ?? 0) + 1
  hits.set(req.ip, n)
  if (n > 5) return res.status(429).send("slow down")
  res.send("ok")
}
