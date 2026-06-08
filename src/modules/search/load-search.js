import { qs, on } from "../../utils/dom"
import { setSP } from "../../utils/search-params"

export function loadSearch() {
  const $container = qs(".search__input")

  on($container, "input", (e) => {
    const value = e.target.value
    setSP("search", value ? value.toLowerCase() : null)
  })
}
