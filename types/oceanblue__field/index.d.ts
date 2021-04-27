import type { BaseProps } from '../oceanblue__base'

/**
 *  Common props used for form field components
 */
export interface BaseFieldProps<E = unknown> extends BaseProps {
    /** When nested in FormSection, returns the name prop prefixed with the FormSection name. Otherwise, returns the name prop that you passed in. */
    name: string

    /** The id attribute for the DOM. The id is also used to prefix the data-test-id attribute value. */
    id: string

    /** Whether the field is disabled. */
    disabled?: boolean

    /** A callback function for the onFocus DOM event. */
    onFocus?: (e: React.FocusEvent<E>) => void

    /** A callback function for the onBlur DOM event. */
    onBlur?: (e: React.FocusEvent<E>) => void

    /** A callback function for the onChange DOM event. */
    onChange?: (event: React.ChangeEvent<E>) => void

    /** Whether the field is required. */
    required?: boolean

    /** Whether the field has been interacted with. */
    touched?: boolean

    /** The error for this field if its value is not passing validation. Both synchronous, asynchronous, and submit validation errors will be reported here. */
    error?: string

    /** true if the field value fails validation (has a validation error). Opposite of valid. */
    invalid?: boolean
}
