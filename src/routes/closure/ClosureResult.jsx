import PropTypes from 'prop-types'
import { Dependencies, Name } from '../../shared'
import ClosureResults from './ClosureResults'
import './ClosureResult.css'

const ClosureResult = ({ closureResult, onNameClick }) => {
    return (
        <div className={`closure-result ${closureResult.type}`}>
            <div className={closureResult.confirmed ? 'scope name' : 'scope name inferred'}><Name name={closureResult.name} onNameClick={onNameClick} />{!closureResult.confirmed && ' *'}</div>
            <Dependencies inbounds={closureResult.inbound} outbounds={closureResult.outbound} onNameClick={onNameClick} />
            {closureResult.type === 'package' &&
                <ClosureResults closureResults={closureResult.classes} type="classes" onNameClick={onNameClick} />
            }
            {closureResult.type === 'class' &&
                <ClosureResults closureResults={closureResult.features} type="features" onNameClick={onNameClick} />
            }
        </div>
    )
}

ClosureResult.propTypes = {
    closureResult: PropTypes.object.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default ClosureResult
