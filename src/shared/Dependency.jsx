import PropTypes from 'prop-types'
import Name from './Name'
import './Dependency.css'

function Dependency({ direction, type, name, confirmed, onNameClick }) {
    return (
        <div className={confirmed ? `dependency ${type}` : `dependency ${type} inferred`}>{direction} <Name name={name} onNameClick={onNameClick} />{!confirmed && ' *'}</div>
    )
}

Dependency.propTypes = {
    direction: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    confirmed: PropTypes.bool.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default Dependency
