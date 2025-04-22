import PropTypes from 'prop-types'
import QueryResult from './QueryResult'
import './QueryResults.css'

function QueryResults({ queryResults, type, onNameClick }) {
    return (
        <div className={`query-results ${type}`}>
            {queryResults.map(result => (
                <QueryResult key={result.name} queryResult={result} onNameClick={onNameClick} />
            ))}
        </div>
    )
}

QueryResults.propTypes = {
    queryResults: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default QueryResults
