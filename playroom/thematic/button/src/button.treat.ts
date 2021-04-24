import { style } from 'treat'

export const button = style((theme) => ({
  fontFamily: theme.components.button.fontfamily.value,
  fontWeight: theme.components.button.fontweight.value,
  borderRadius: theme.components.button.radius.value,
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: theme.components.button.fontsize.value,
  letterSpacing: '-0.3px',
  lineHeight: theme.components.button.lineheight.value,
  padding: `${theme.components.button.padding.y.value} ${theme.components.button.padding.x.value}`,
  userSelect: 'none',
  color: theme.components.button.color.default.value,
  backgroundColor: theme.components.button.backgroundcolor.default.value,
  borderWidth: theme.components.button.borderWidth.default.value,
  borderColor: theme.components.button.bordercolor.default.value,
  borderStyle: theme.components.button.borderStyle.default.value,
  transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
  outline: 'none',
  whiteSpace: 'nowrap',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',

  ':hover': {
    backgroundColor: theme.components.button.backgroundcolor.hover.value,
    borderColor: theme.components.button.bordercolor.hover.value,
    color: theme.components.button.color.hover.value
  },
  ':focus': {
    backgroundColor: theme.components.button.backgroundcolor.hover.value,
    borderColor: theme.components.button.bordercolor.hover.value,
    color: theme.components.button.color.hover.value
  },

  ':active': {
    backgroundColor: theme.components.button.backgroundcolor.active.value,
    borderColor: theme.components.button.bordercolor.active.value,
    color: theme.components.button.color.active.value
  },

  selectors: {
    '&[disabled]': {
      cursor: 'not-allowed',
      backgroundColor: theme.components.button.backgroundcolor.disabled.value,
      borderColor: theme.components.button.bordercolor.disabled.value,
      color: theme.components.button.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor: theme.components.button.backgroundcolor.disabled.value,
      borderColor: theme.components.button.bordercolor.disabled.value,
      color: theme.components.button.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor: theme.components.button.backgroundcolor.disabled.value,
      borderColor: theme.components.button.bordercolor.disabled.value,
      color: theme.components.button.color.disabled.value
    }
  }
}))

export const secondary = style((theme) => ({
  backgroundColor:
    theme.components.button.secondary.backgroundcolor.default.value,
  borderColor: theme.components.button.secondary.bordercolor.default.value,
  color: theme.components.button.secondary.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.secondary.backgroundcolor.hover.value,
    borderColor: theme.components.button.secondary.bordercolor.hover.value,
    color: theme.components.button.secondary.color.hover.value
  },
  ':focus': {
    backgroundColor:
      theme.components.button.secondary.backgroundcolor.hover.value,
    borderColor: theme.components.button.secondary.bordercolor.hover.value,
    color: theme.components.button.secondary.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.secondary.backgroundcolor.active.value,
    borderColor: theme.components.button.secondary.bordercolor.active.value,
    color: theme.components.button.secondary.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.secondary.backgroundcolor.disabled.value,
      borderColor: theme.components.button.secondary.bordercolor.disabled.value,
      color: theme.components.button.secondary.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.secondary.backgroundcolor.disabled.value,
      borderColor: theme.components.button.secondary.bordercolor.disabled.value,
      color: theme.components.button.secondary.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.secondary.backgroundcolor.disabled.value,
      borderColor: theme.components.button.secondary.bordercolor.disabled.value,
      color: theme.components.button.secondary.color.disabled.value
    }
  }
}))

export const animateStateChange = style((theme) => ({
  '@keyframes': {
    from: {
      backgroundColor: theme.components.button.backgroundcolor.disabled.value,
      borderColor: theme.components.button.bordercolor.disabled.value,
      color: theme.components.button.color.disabled.value
    },
    to: {
      backgroundColor: theme.components.button.backgroundcolor.default.value,
      borderColor: theme.components.button.bordercolor.default.value,
      color: theme.components.button.color.default.value
    }
  },
  animation: '@keyframes ease-in-out',
  animationDuration: theme.components.button.animatestate.duration.value,

  selectors: {
    '&[disabled]': {
      '@keyframes': {
        from: {
          backgroundColor:
            theme.components.button.backgroundcolor.default.value,
          borderColor: theme.components.button.bordercolor.default.value,
          color: theme.components.button.color.default.value
        },
        to: {
          backgroundColor:
            theme.components.button.backgroundcolor.disabled.value,
          borderColor: theme.components.button.bordercolor.disabled.value,
          color: theme.components.button.color.disabled.value
        }
      },
      animation: '@keyframes 0.3s ease-in-out'
    }
  }
}))

export const tertiary = style((theme) => ({
  backgroundColor:
    theme.components.button.tertiary.backgroundcolor.default.value,
  borderColor: theme.components.button.tertiary.bordercolor.default.value,
  color: theme.components.button.tertiary.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.tertiary.backgroundcolor.hover.value,
    borderColor: theme.components.button.tertiary.bordercolor.hover.value,
    color: theme.components.button.tertiary.color.hover.value,
    textDecoration: theme.components.button.tertiary.decoration.hover.value
  },
  ':focus': {
    backgroundColor:
      theme.components.button.tertiary.backgroundcolor.hover.value,
    borderColor: theme.components.button.tertiary.bordercolor.hover.value,
    color: theme.components.button.tertiary.color.hover.value,
    textDecoration: theme.components.button.tertiary.decoration.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.tertiary.backgroundcolor.active.value,
    borderColor: theme.components.button.tertiary.bordercolor.active.value,
    color: theme.components.button.tertiary.color.active.value,
    textDecoration: theme.components.button.tertiary.decoration.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.backgroundcolor.disabled.value,
      borderColor: theme.components.button.tertiary.bordercolor.disabled.value,
      color: theme.components.button.tertiary.color.disabled.value,
      textDecoration: theme.components.button.tertiary.decoration.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.backgroundcolor.disabled.value,
      borderColor: theme.components.button.tertiary.bordercolor.disabled.value,
      color: theme.components.button.tertiary.color.disabled.value,
      textDecoration: theme.components.button.tertiary.decoration.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.backgroundcolor.disabled.value,
      borderColor: theme.components.button.tertiary.bordercolor.disabled.value,
      color: theme.components.button.tertiary.color.disabled.value,
      textDecoration: theme.components.button.tertiary.decoration.disabled.value
    }
  }
}))

export const action = style((theme) => ({
  backgroundColor: theme.components.button.action.backgroundcolor.default.value,
  borderColor: theme.components.button.action.bordercolor.default.value,
  color: theme.components.button.action.color.default.value,

  ':hover': {
    backgroundColor: theme.components.button.action.backgroundcolor.hover.value,
    borderColor: theme.components.button.action.bordercolor.hover.value,
    color: theme.components.button.action.color.hover.value
  },
  ':focus': {
    backgroundColor: theme.components.button.action.backgroundcolor.hover.value,
    borderColor: theme.components.button.action.bordercolor.hover.value,
    color: theme.components.button.action.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.action.backgroundcolor.active.value,
    borderColor: theme.components.button.action.bordercolor.active.value,
    color: theme.components.button.action.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.action.backgroundcolor.disabled.value,
      borderColor: theme.components.button.action.bordercolor.disabled.value,
      color: theme.components.button.action.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.action.backgroundcolor.disabled.value,
      borderColor: theme.components.button.action.bordercolor.disabled.value,
      color: theme.components.button.action.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.action.backgroundcolor.disabled.value,
      borderColor: theme.components.button.action.bordercolor.disabled.value,
      color: theme.components.button.action.color.disabled.value
    }
  }
}))

export const secondaryaction = style((theme) => ({
  backgroundColor:
    theme.components.button.secondary.action.backgroundcolor.default.value,
  borderColor:
    theme.components.button.secondary.action.bordercolor.default.value,
  color: theme.components.button.secondary.action.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.secondary.action.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.secondary.action.bordercolor.hover.value,
    color: theme.components.button.secondary.action.color.hover.value
  },
  ':focus': {
    backgroundColor:
      theme.components.button.secondary.action.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.secondary.action.bordercolor.hover.value,
    color: theme.components.button.secondary.action.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.secondary.action.backgroundcolor.active.value,
    borderColor:
      theme.components.button.secondary.action.bordercolor.active.value,
    color: theme.components.button.secondary.action.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.secondary.action.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.secondary.action.bordercolor.disabled.value,
      color: theme.components.button.secondary.action.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.secondary.action.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.secondary.action.bordercolor.disabled.value,
      color: theme.components.button.secondary.action.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.secondary.action.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.secondary.action.bordercolor.disabled.value,
      color: theme.components.button.secondary.action.color.disabled.value
    }
  }
}))

export const tertiaryaction = style((theme) => ({
  backgroundColor:
    theme.components.button.tertiary.action.backgroundcolor.default.value,
  borderColor:
    theme.components.button.tertiary.action.bordercolor.default.value,
  color: theme.components.button.tertiary.action.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.tertiary.action.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.tertiary.action.bordercolor.hover.value,
    color: theme.components.button.tertiary.action.color.hover.value
  },
  ':focus': {
    backgroundColor:
      theme.components.button.tertiary.action.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.tertiary.action.bordercolor.hover.value,
    color: theme.components.button.tertiary.action.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.tertiary.action.backgroundcolor.active.value,
    borderColor:
      theme.components.button.tertiary.action.bordercolor.active.value,
    color: theme.components.button.tertiary.action.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.action.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.tertiary.action.bordercolor.disabled.value,
      color: theme.components.button.tertiary.action.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.action.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.tertiary.action.bordercolor.disabled.value,
      color: theme.components.button.tertiary.action.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.action.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.tertiary.action.bordercolor.disabled.value,
      color: theme.components.button.tertiary.action.color.disabled.value
    }
  }
}))

export const destructive = style((theme) => ({
  backgroundColor:
    theme.components.button.destructive.backgroundcolor.default.value,
  borderColor: theme.components.button.destructive.bordercolor.default.value,
  color: theme.components.button.destructive.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.destructive.backgroundcolor.hover.value,
    borderColor: theme.components.button.destructive.bordercolor.hover.value,
    color: theme.components.button.destructive.color.hover.value
  },

  ':focus': {
    backgroundColor:
      theme.components.button.destructive.backgroundcolor.hover.value,
    borderColor: theme.components.button.destructive.bordercolor.hover.value,
    color: theme.components.button.destructive.color.hover.value
  },
  ':active': {
    backgroundColor:
      theme.components.button.destructive.backgroundcolor.active.value,
    borderColor: theme.components.button.destructive.bordercolor.active.value,
    color: theme.components.button.destructive.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.destructive.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.destructive.bordercolor.disabled.value,
      color: theme.components.button.destructive.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.destructive.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.destructive.bordercolor.disabled.value,
      color: theme.components.button.destructive.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.destructive.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.destructive.bordercolor.disabled.value,
      color: theme.components.button.destructive.color.disabled.value
    }
  }
}))

export const secondarydestructive = style((theme) => ({
  backgroundColor:
    theme.components.button.secondary.destructive.backgroundcolor.default.value,
  borderColor:
    theme.components.button.secondary.destructive.bordercolor.default.value,
  color: theme.components.button.secondary.destructive.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.secondary.destructive.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.secondary.destructive.bordercolor.hover.value,
    color: theme.components.button.secondary.destructive.color.hover.value
  },

  ':focus': {
    backgroundColor:
      theme.components.button.secondary.destructive.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.secondary.destructive.bordercolor.hover.value,
    color: theme.components.button.secondary.destructive.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.secondary.destructive.backgroundcolor.active
        .value,
    borderColor:
      theme.components.button.secondary.destructive.bordercolor.active.value,
    color: theme.components.button.secondary.destructive.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.secondary.destructive.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.secondary.destructive.bordercolor.disabled
          .value,
      color: theme.components.button.secondary.destructive.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.secondary.destructive.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.secondary.destructive.bordercolor.disabled
          .value,
      color: theme.components.button.secondary.destructive.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.secondary.destructive.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.secondary.destructive.bordercolor.disabled
          .value,
      color: theme.components.button.secondary.destructive.color.disabled.value
    }
  }
}))

export const tertiarydestructive = style((theme) => ({
  backgroundColor:
    theme.components.button.tertiary.destructive.backgroundcolor.default.value,
  borderColor:
    theme.components.button.tertiary.destructive.bordercolor.default.value,
  color: theme.components.button.tertiary.destructive.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.tertiary.destructive.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.tertiary.destructive.bordercolor.hover.value,
    color: theme.components.button.tertiary.destructive.color.hover.value
  },

  ':focus': {
    backgroundColor:
      theme.components.button.tertiary.destructive.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.tertiary.destructive.bordercolor.hover.value,
    color: theme.components.button.tertiary.destructive.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.tertiary.destructive.backgroundcolor.active.value,
    borderColor:
      theme.components.button.tertiary.destructive.bordercolor.active.value,
    color: theme.components.button.tertiary.destructive.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.destructive.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.tertiary.destructive.bordercolor.disabled.value,
      color: theme.components.button.tertiary.destructive.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.destructive.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.tertiary.destructive.bordercolor.disabled.value,
      color: theme.components.button.tertiary.destructive.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.destructive.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.tertiary.destructive.bordercolor.disabled.value,
      color: theme.components.button.tertiary.destructive.color.disabled.value
    }
  }
}))

export const peripheral = style((theme) => ({
  backgroundColor:
    theme.components.button.peripheral.backgroundcolor.default.value,
  borderColor: theme.components.button.peripheral.bordercolor.default.value,
  color: theme.components.button.peripheral.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.peripheral.backgroundcolor.hover.value,
    borderColor: theme.components.button.peripheral.bordercolor.hover.value,
    color: theme.components.button.peripheral.color.hover.value
  },

  ':focus': {
    backgroundColor:
      theme.components.button.peripheral.backgroundcolor.hover.value,
    borderColor: theme.components.button.peripheral.bordercolor.hover.value,
    color: theme.components.button.peripheral.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.peripheral.backgroundcolor.active.value,
    borderColor: theme.components.button.peripheral.bordercolor.active.value,
    color: theme.components.button.peripheral.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.peripheral.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.peripheral.bordercolor.disabled.value,
      color: theme.components.button.peripheral.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.peripheral.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.peripheral.bordercolor.disabled.value,
      color: theme.components.button.peripheral.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.peripheral.backgroundcolor.disabled.value,
      borderColor:
        theme.components.button.peripheral.bordercolor.disabled.value,
      color: theme.components.button.peripheral.color.disabled.value
    }
  }
}))

export const secondaryperipheral = style((theme) => ({
  backgroundColor:
    theme.components.button.secondary.peripheral.backgroundcolor.default.value,
  borderColor:
    theme.components.button.secondary.peripheral.bordercolor.default.value,
  color: theme.components.button.secondary.peripheral.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.secondary.peripheral.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.secondary.peripheral.bordercolor.hover.value,
    color: theme.components.button.secondary.peripheral.color.hover.value
  },

  ':focus': {
    backgroundColor:
      theme.components.button.secondary.peripheral.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.secondary.peripheral.bordercolor.hover.value,
    color: theme.components.button.secondary.peripheral.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.secondary.peripheral.backgroundcolor.active.value,
    borderColor:
      theme.components.button.secondary.peripheral.bordercolor.active.value,
    color: theme.components.button.secondary.peripheral.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.secondary.peripheral.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.secondary.peripheral.bordercolor.disabled.value,
      color: theme.components.button.secondary.peripheral.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.secondary.peripheral.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.secondary.peripheral.bordercolor.disabled.value,
      color: theme.components.button.secondary.peripheral.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.secondary.peripheral.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.secondary.peripheral.bordercolor.disabled.value,
      color: theme.components.button.secondary.peripheral.color.disabled.value
    }
  }
}))

export const tertiaryperipheral = style((theme) => ({
  backgroundColor:
    theme.components.button.tertiary.peripheral.backgroundcolor.default.value,
  borderColor:
    theme.components.button.tertiary.peripheral.bordercolor.default.value,
  color: theme.components.button.tertiary.peripheral.color.default.value,

  ':hover': {
    backgroundColor:
      theme.components.button.tertiary.peripheral.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.tertiary.peripheral.bordercolor.hover.value,
    color: theme.components.button.tertiary.peripheral.color.hover.value
  },

  ':focus': {
    backgroundColor:
      theme.components.button.tertiary.peripheral.backgroundcolor.hover.value,
    borderColor:
      theme.components.button.tertiary.peripheral.bordercolor.hover.value,
    color: theme.components.button.tertiary.peripheral.color.hover.value
  },

  ':active': {
    backgroundColor:
      theme.components.button.tertiary.peripheral.backgroundcolor.active.value,
    borderColor:
      theme.components.button.tertiary.peripheral.bordercolor.active.value,
    color: theme.components.button.tertiary.peripheral.color.active.value
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.peripheral.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.tertiary.peripheral.bordercolor.disabled.value,
      color: theme.components.button.tertiary.peripheral.color.disabled.value
    },
    '&:hover[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.peripheral.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.tertiary.peripheral.bordercolor.disabled.value,
      color: theme.components.button.tertiary.peripheral.color.disabled.value
    },
    '&:focus[disabled]': {
      backgroundColor:
        theme.components.button.tertiary.peripheral.backgroundcolor.disabled
          .value,
      borderColor:
        theme.components.button.tertiary.peripheral.bordercolor.disabled.value,
      color: theme.components.button.tertiary.peripheral.color.disabled.value
    }
  }
}))

export const xsmall = style((theme) => ({
  lineHeight: theme.components.button.xsmall.lineheight.value,
  borderRadius: theme.components.button.xsmall.radius.value,
  fontSize: theme.components.button.xsmall.fontsize.value
}))

export const small = style((theme) => ({
  lineHeight: theme.components.button.small.lineheight.value,
  borderRadius: theme.components.button.small.radius.value,
  fontSize: theme.components.button.small.fontsize.value
}))

export const large = style((theme) => ({
  lineHeight: theme.components.button.large.lineheight.value,
  borderRadius: theme.components.button.large.radius.value,
  fontSize: theme.components.button.large.fontsize.value
}))

export const justify = style({
  justifyContent: 'space-between'
})

export const justifyCenter = style({
  justifyContent: 'center'
})

export const fullWidth = style({
  width: '100%'
})

export const contentWrapper = style({
  display: 'inline-block',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export const iconLeft = style((theme) => ({
  marginLeft: theme.components.button.icon.margin.value
}))

export const iconRight = style((theme) => ({
  marginRight: theme.components.button.icon.margin.value
}))
