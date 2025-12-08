import PropTypes from 'prop-types'
import { Dependencies, Name } from '../../shared'
import QueryResults from './QueryResults'
import './QueryResult.css'

const QueryResult = ({ queryResult, onNameClick }) => {
    return (
        <div className={`query-result ${queryResult.type}`}>
            <div className={queryResult.confirmed ? 'scope name' : 'scope name inferred'}><Name name={queryResult.name} onNameClick={onNameClick} />{!queryResult.confirmed && ' *'}</div>
            <Dependencies inbounds={queryResult.inbound} outbounds={queryResult.outbound} onNameClick={onNameClick} />
            {queryResult.type === 'package' &&
                <QueryResults queryResults={queryResult.classes} type="classes" onNameClick={onNameClick} />
            }
            {queryResult.type === 'class' &&
                <QueryResults queryResults={queryResult.features} type="features" onNameClick={onNameClick} />
            }
        </div>
    )
}

QueryResult.propTypes = {
    queryResult: PropTypes.object.isRequired,
    onNameClick: PropTypes.func.isRequired,
}

export default QueryResult
