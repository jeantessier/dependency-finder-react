import PropTypes from 'prop-types'
import './Dependency.css'

function Dependency({ direction, type, name, confirmed }) {
    return (
        <div className={confirmed ? `dependency ${type}` : `dependency ${type} inferred`}>{direction} {name}{!confirmed && ' *'}</div>
    )
}

Dependency.propTypes = {
    direction: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    confirmed: PropTypes.bool.isRequired,
}

export default Dependency
