import PropTypes from 'prop-types'
import Chart from './Chart'
import DependencyResults from './DependencyResults'
import Histograms from './Histograms'
import ProgrammingElementResults from './ProgrammingElementResults'
import './MetricsResults.css'

function MetricsResults({ metricsResults }) {
    return (
        metricsResults &&
            <div className="metrics-results">
                <ProgrammingElementResults metricsResults={metricsResults}/>
                <DependencyResults metricsResults={metricsResults}/>
                <Chart chart={metricsResults.chart}/>
                <Histograms histograms={metricsResults.histograms}/>
            </div>
    )
}

MetricsResults.propTypes = {
    metricsResults: PropTypes.array.isRequired,
}

export default MetricsResults
