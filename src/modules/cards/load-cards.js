import { qs } from "../../utils/dom"
import { populate } from "../../utils/templates"
import { CARD_TEMPLATE } from "./ui"
import "./styles.scss"

export function loadCards(cardList) {
  const $container = qs(".course-list")

  $container.innerHTML = cardList
    .map(({ price, ...rest }) =>
      populate(CARD_TEMPLATE, { price: price.toString(), ...rest }),
    )
    .join("")
}
