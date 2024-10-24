import PropTypes from 'prop-types'
import QueryResult from './QueryResult'
import './QueryResults.css'

function QueryResults({ queryResults }) {
    return (
        <div className="query-results">
            {queryResults.map(result => (
                <QueryResult key={result.name} queryResult={result} />
            ))}
        </div>
    )
}

QueryResults.propTypes = {
    queryResults: PropTypes.array.isRequired,
}

export default QueryResults
