import { globalStyle, style } from 'treat'

const bodyStyle = style((theme) => ({
  backgroundColor: theme.palette.background.default.value,
  margin: '0',
  fontFamily: theme.font.family.body.value,
  fontSize: theme.size.font.default.value,
  lineHeight: theme.size.lineheight.default.value,
  letterSpacing: '-0.3px',
  color: theme.palette.text.default.value,
  minWidth: '320px'
}))

globalStyle(`${bodyStyle} *, ${bodyStyle}  ::after, ${bodyStyle}  ::before`, {
  boxSizing: 'border-box'
})

export { bodyStyle }
