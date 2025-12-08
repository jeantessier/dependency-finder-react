import PropTypes from 'prop-types'
import './Name.css'

const Name = ({ name, onNameClick }) => {
    const handleClick = e => onNameClick && onNameClick(e.target.textContent)

    return (
        <span className="name" onClick={handleClick}>{name}</span>
    )
}

Name.propTypes = {
    name: PropTypes.string.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default Name
