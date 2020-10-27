import * as React from "react"
import { Iframe } from "@reflexjs/components"

export function GoogleMap({ address, ...props }) {
  return (
    <Iframe
      src={`https://maps.google.com/maps?q=${encodeURI(
        address
      )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      width="100%"
      height="100%"
      frameborder="0"
      aria-hidden="false"
      tabindex="0"
      {...props}
    ></Iframe>
  )
}
