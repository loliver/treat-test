export interface ButtonInterface {
  /** Appearance of the button to determine what sort of action it completes when clicked. */
  appearance?: 'primary' | 'action' | 'destructive' | 'peripheral'
  /** Importance of button, primary, secondary or tertiary. */
  importance?: 'primary' | 'secondary' | 'tertiary'
  /** large: Body text size 2 (16px), default is size 1 (14px), small decreases padding to fit within tables etc. */
  size?: 'extra-small' | 'small' | 'medium' | 'large'
  /** Whether the button is in a disabled state. */
  disabled?: boolean
  /** Applies `width: 100%;` to the button. */
  fullWidth?: boolean
  /** Optional icon */
  icon?: string | JSX.Element
  /** Icon placement */
  iconPlacement?: 'left' | 'right'
  /** Special case for when this button contains complex children */
  alignment?: 'center' | 'justify'
  type?: 'button' | 'submit'
  /** Special case to animate state change of button */
  animateStateChange?: boolean
  id?: string
  autoFocus?: boolean
  name?: string
  value?: string
  children?: string | JSX.Element | Array<string | JSX.Element>
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  ariaExpanded?: boolean
  title?: string
}

export interface ButtonPropsInterface {
  disabled?: boolean
  type?: 'button' | 'submit'
  id?: string
  autoFocus?: boolean
  name?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
  'data-test-id'?: string
  title?: string
}
