import PropTypes from 'prop-types'
import './Dependency.css'

function Dependency({ direction, name, confirmed }) {
    return (
        <div className={confirmed ? 'dependency' : 'dependency inferred'}>{direction} {name}{!confirmed && ' *'}</div>
    );
}

Dependency.propTypes = {
    direction: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    confirmed: PropTypes.bool.isRequired,
}

export default Dependency
