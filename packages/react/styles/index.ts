import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@gpssat/tokens'

const {
  styled: defaultStyled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    radii,
    lineHeights,
    space,
  },
})

const styled: typeof defaultStyled = (element, css, name: string) => {
  const component = defaultStyled(element, css)
  console.log(component.name)
  component.displayName = name
  return component
}

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
}
