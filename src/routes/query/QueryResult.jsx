import PropTypes from 'prop-types'
import QueryResults from './QueryResults'
import Dependencies from '../../shared/Dependencies'
import './QueryResult.css'

function QueryResult({ queryResult }) {
    return (
        <div className={`query-result ${queryResult.type}`}>
            <div className={queryResult.confirmed ? 'scope name' : 'scope name inferred'}>{queryResult.name}{!queryResult.confirmed && ' *'}</div>
            <Dependencies inbounds={queryResult.inbound} outbounds={queryResult.outbound} />
            {queryResult.type === 'package' &&
                <QueryResults queryResults={queryResult.classes} type="classes" />
            }
            {queryResult.type === 'class' &&
                <QueryResults queryResults={queryResult.features} type="features" />
            }
        </div>
    )
}

QueryResult.propTypes = {
    queryResult: PropTypes.object.isRequired,
}

export default QueryResult
