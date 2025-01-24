import PropTypes from 'prop-types'
import DependencyResults from './DependencyResults'
import ProgrammingElementResults from './ProgrammingElementResults'
import './MetricsResults.css'

function MetricsResults({ metricsResults }) {
    return (
        metricsResults &&
            <div className="metrics-results">
                <ProgrammingElementResults metricsResults={metricsResults}/>
                <DependencyResults metricsResults={metricsResults}/>
            </div>
    )
}

MetricsResults.propTypes = {
    metricsResults: PropTypes.object.isRequired,
}

export default MetricsResults
