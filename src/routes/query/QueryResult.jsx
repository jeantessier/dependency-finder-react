import QueryResults from './QueryResults'
import Dependencies from './Dependencies'
import './QueryResult.css'

export default function QueryResult({ queryResult }) {
    return (
        <div className="query-result">
            <div className={queryResult.confirmed ? 'scope name' : 'scope name inferred'}>{queryResult.name}{!queryResult.confirmed && ' *'}</div>
            <Dependencies inbounds={queryResult.inbound} outbounds={queryResult.outbound} />
            <blockquote>
                {queryResult.type === 'package' &&
                    <QueryResults queryResults={queryResult.classes} />
                }
                {queryResult.type === 'class' &&
                    <QueryResults queryResults={queryResult.features} />
                }
            </blockquote>
        </div>
    )
}
