import React from 'react'
import { useStyles } from 'react-treat'
import cn from 'classnames'

import * as styleRefs from './button.treat'
import { ButtonInterface, ButtonPropsInterface } from './index.typed'

const AnzButton = ({
  appearance,
  importance,
  animateStateChange,
  size,
  disabled,
  fullWidth,
  icon,
  iconPlacement,
  alignment,
  type,
  id,
  autoFocus,
  name,
  value,
  children,
  onClick,
  onBlur,
  onFocus,
  ariaExpanded,
  title
}: ButtonInterface) => {
  const styles = useStyles(styleRefs)
  const buttonProps: ButtonPropsInterface = {}
  if (disabled) buttonProps.disabled = disabled
  buttonProps.type = type || 'button'
  if (id) {
    buttonProps.id = id
    buttonProps['data-test-id'] = `${buttonProps.id}_button`
  }
  if (autoFocus) buttonProps.autoFocus = autoFocus
  if (name) buttonProps.name = name
  if (value) buttonProps.value = value
  if (onClick) buttonProps.onClick = onClick
  if (onFocus) buttonProps.onFocus = onFocus
  if (onBlur) buttonProps.onBlur = onBlur
  if (title) buttonProps.title = title

  const IconChild = <span className={styles.contentWrapper}>{icon}</span>

  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.animateStateChange]: animateStateChange,
        [styles.secondary]: importance === 'secondary',
        [styles.tertiary]: importance === 'tertiary',
        [styles.action]: appearance === 'action',
        [styles.secondaryaction]:
          importance === 'secondary' && appearance === 'action',
        [styles.tertiaryaction]:
          importance === 'tertiary' && appearance === 'action',
        [styles.destructive]: appearance === 'destructive',
        [styles.secondarydestructive]:
          importance === 'secondary' && appearance === 'destructive',
        [styles.tertiarydestructive]:
          importance === 'tertiary' && appearance === 'destructive',
        [styles.peripheral]: appearance === 'peripheral',
        [styles.secondaryperipheral]:
          importance === 'secondary' && appearance === 'peripheral',
        [styles.tertiaryperipheral]:
          importance === 'tertiary' && appearance === 'peripheral',
        [styles.xsmall]: size === 'extra-small',
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.justify]: alignment === 'justify',
        [styles.justifyCenter]: alignment === 'center',
        [styles.fullWidth]: fullWidth
      })}
      {...buttonProps}
      aria-expanded={ariaExpanded}>
      {(!iconPlacement || iconPlacement === 'left') && icon && IconChild}
      <span
        className={cn({
          [styles.contentWrapper]: true,
          [styles.iconLeft]:
            icon && (iconPlacement === 'left' || iconPlacement === undefined),
          [styles.iconRight]: icon && iconPlacement === 'right'
        })}>
        {children}
      </span>
      {iconPlacement === 'right' && icon && IconChild}
    </button>
  )
}

export default AnzButton
