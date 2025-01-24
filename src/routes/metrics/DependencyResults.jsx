import PropTypes from 'prop-types'
import DependencyResult from "./DependencyResult.jsx";
import './DependencyResults.css'

function DependencyResults({ metricsResults }) {
    return (
        <div className="dependency-results">
            <DependencyResult direction="outbound" toFrom="to" dependencyResult={metricsResults.outbounds} />
            <DependencyResult direction="inbound" toFrom="from" dependencyResult={metricsResults.inbounds} />
        </div>
    )
}

DependencyResults.propTypes = {
    metricsResults: PropTypes.object.isRequired,
}

export default DependencyResults
