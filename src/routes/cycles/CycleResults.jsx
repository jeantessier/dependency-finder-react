import PropTypes from 'prop-types'
import CycleNode from './CycleNode'
import './CycleResults.css'

function CyclesResult({ cycleResults }) {
    return (
        <div className={`cycle-results`}>
            {cycleResults.map(cycleNode => (
                <CycleNode key={cycleNode.name} cycleNode={cycleNode} />
            ))}
        </div>
    )
}

CyclesResult.propTypes = {
    cycleResults: PropTypes.array.isRequired,
}

export default CyclesResult
