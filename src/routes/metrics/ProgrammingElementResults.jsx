import PropTypes from 'prop-types'
import ProgrammingElementResult from './ProgrammingElementResult'
import './ProgrammingElementResults.css'

const ProgrammingElementResults = ({ metricsResults, onNameClick }) => {
    return (
        <div className="programming-element-results">
            <ProgrammingElementResult type="package" label="package(s)" programmingElementResult={metricsResults.packages} onNameClick={onNameClick} />
            <ProgrammingElementResult type="class" label="class(es)" programmingElementResult={metricsResults.classes} onNameClick={onNameClick} />
            <ProgrammingElementResult type="feature" label="feature(s)" programmingElementResult={metricsResults.features} onNameClick={onNameClick} />
        </div>
    )
}

ProgrammingElementResults.propTypes = {
    metricsResults: PropTypes.object.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default ProgrammingElementResults
