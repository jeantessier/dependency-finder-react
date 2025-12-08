import PropTypes from 'prop-types'
import CycleResults from './CycleResults'
import './CyclesResults.css'

const CyclesResults = ({ cyclesResults }) => {
    return (
        <div className={`cycles-results`}>
            {cyclesResults.map(cycleResult => (
                <CycleResults key={cycleResult.length} cycleResults={cycleResult} />
            ))}
        </div>
    )
}

CyclesResults.propTypes = {
    cyclesResults: PropTypes.array.isRequired,
}

export default CyclesResults
