import PropTypes from 'prop-types'
import ClosureResult from './ClosureResult'
import './ClosureResults.css'

const ClosureResults = ({ closureResults, type }) => {
    return (
        <div className={`closure-results ${type}`}>
            {closureResults.map(result =>
                <ClosureResult key={result.name} closureResult={result} />
            )}
        </div>
    )
}

ClosureResults.propTypes = {
    closureResults: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
}

export default ClosureResults
