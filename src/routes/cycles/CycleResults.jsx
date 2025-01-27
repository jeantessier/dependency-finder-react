import PropTypes from 'prop-types'
import CycleNode from './CycleNode'
import './CycleResults.css'

function CyclesResult({ cycleResults }) {
    return (
        <div className={`cycle-results`}>
            {cycleResults.map(cycleNode =>
                <CycleNode key={cycleNode.name} cycleNode={cycleNode} />
            )}
            <CycleNode key={cycleResults[0].name} cycleNode={cycleResults[0]} />
        </div>
    )
}

CyclesResult.propTypes = {
    cycleResults: PropTypes.array.isRequired,
}

export default CyclesResult
