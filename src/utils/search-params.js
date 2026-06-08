const url = new URL(window.location.href)

export function getSP(name) {
  return url.searchParams.get(name)
}

export function setSP(name, value) {
  if (value === null) {
    url.searchParams.delete(name)
    window.history.replaceState(null, "", url)
    return
  }
  if (typeof value !== "string") {
    console.error(`Invalid search parameter value: ${value}`)
    return
  }
  url.searchParams.set(name, value)
  window.history.replaceState(null, "", url)
}
