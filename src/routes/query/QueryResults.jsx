import PropTypes from 'prop-types'
import QueryResult from './QueryResult'
import './QueryResults.css'

function QueryResults({ queryResults, type }) {
    return (
        <div className={`query-results ${type}`}>
            {queryResults.map(result => (
                <QueryResult key={result.name} queryResult={result} />
            ))}
        </div>
    )
}

QueryResults.propTypes = {
    queryResults: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
}

export default QueryResults
