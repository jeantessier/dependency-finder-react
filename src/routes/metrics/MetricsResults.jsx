import PropTypes from 'prop-types'
import Chart from './Chart'
import DependencyResults from './DependencyResults'
import Histograms from './Histograms'
import ProgrammingElementResults from './ProgrammingElementResults'
import './MetricsResults.css'

const MetricsResults = ({ metricsResults, onNameClick }) => {
    return (
        metricsResults &&
            <div className="metrics-results">
                <ProgrammingElementResults metricsResults={metricsResults} onNameClick={onNameClick} />
                <DependencyResults metricsResults={metricsResults} />
                <Chart chart={metricsResults.chart} />
                <Histograms histograms={metricsResults.histograms} />
            </div>
    )
}

MetricsResults.propTypes = {
    metricsResults: PropTypes.array.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default MetricsResults
