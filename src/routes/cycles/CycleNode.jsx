import PropTypes from 'prop-types'
import { OUTBOUND } from '../../lib/constants'
import './CycleNode.css'

function CycleNode({ cycleNode }) {
    return (
        <div className="cycle-node">
            <span className="marker">{OUTBOUND}</span>
            <span className="type">{cycleNode.type}</span>
            <span className="name">{cycleNode.name}</span>
        </div>
    )
}

CycleNode.propTypes = {
    cycleNode: PropTypes.object.isRequired,
}

export default CycleNode
