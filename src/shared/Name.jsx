import PropTypes from 'prop-types'
import './Name.css'

function Name({ name, onNameClick }) {
    const handleClick = e => {
        if (onNameClick) {
            onNameClick(e.target.textContent)
        }
    }

    return (
        <span className="name" onClick={handleClick}>{name}</span>
    )
}

Name.propTypes = {
    name: PropTypes.string.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default Name
