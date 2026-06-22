import "../styles/button.css"

/**
 * @typedef {Object} IButtonProps
 * @property {string} text
 * @property {boolean} [secondary]
 */

export default function Button({ text, secondary }) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}