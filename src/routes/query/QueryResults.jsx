import QueryResult from './QueryResult'
import './QueryResults.css'

export default function QueryResults({ queryResults }) {
    return (
        <div className="query-results">
            {queryResults.map(result => (
                <QueryResult key={result.name} queryResult={result} />
            ))}
        </div>
    )
}
