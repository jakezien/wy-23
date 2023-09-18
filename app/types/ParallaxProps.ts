enum ParallaxDirection {
  Horizontal, Vertical
}

type ParallaxProps = {
  direction: ParallaxDirection,
  bounds: [number, number],
  speed: number
}
