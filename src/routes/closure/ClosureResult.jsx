import PropTypes from 'prop-types'
import ClosureResults from './ClosureResults'
import Dependencies from '../../shared/Dependencies'
import './ClosureResult.css'

function ClosureResult({ closureResult }) {
    return (
        <div className={`closure-result ${closureResult.type}`}>
            <div className={closureResult.confirmed ? 'scope name' : 'scope name inferred'}>{closureResult.name}{!closureResult.confirmed && ' *'}</div>
            <Dependencies inbounds={closureResult.inbound} outbounds={closureResult.outbound} />
            {closureResult.type === 'package' &&
                <ClosureResults closureResults={closureResult.classes} type="classes" />
            }
            {closureResult.type === 'class' &&
                <ClosureResults closureResults={closureResult.features} type="features" />
            }
        </div>
    )
}

ClosureResult.propTypes = {
    closureResult: PropTypes.object.isRequired,
}

export default ClosureResult
