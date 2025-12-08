import PropTypes from 'prop-types'
import ProgrammingElementResult from './ProgrammingElementResult'
import './ProgrammingElementResults.css'

const ProgrammingElementResults = ({ metricsResults }) => {
    return (
        <div className="programming-element-results">
            <ProgrammingElementResult type="package" label="package(s)" programmingElementResult={metricsResults.packages} />
            <ProgrammingElementResult type="class" label="class(es)" programmingElementResult={metricsResults.classes} />
            <ProgrammingElementResult type="feature" label="feature(s)" programmingElementResult={metricsResults.features} />
        </div>
    )
}

ProgrammingElementResults.propTypes = {
    metricsResults: PropTypes.object.isRequired,
}

export default ProgrammingElementResults
