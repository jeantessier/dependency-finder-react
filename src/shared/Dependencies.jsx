import PropTypes from 'prop-types'
import { INBOUND, OUTBOUND, BIDIRECTIONAL } from '../lib/constants'
import Dependency from './Dependency'
import './Dependencies.css'

function Dependencies({ inbounds, outbounds }) {
    const dependencies = new Map()
    const confirmations = new Map()
    const types = new Map()

    inbounds.forEach(inbound => {
        dependencies.set(inbound.name, INBOUND)
        confirmations.set(inbound.name, inbound.confirmed)
        types.set(inbound.name, inbound.type)
    })
    outbounds.forEach(outbound => {
        dependencies.set(outbound.name, dependencies.has(outbound.name) ? BIDIRECTIONAL : OUTBOUND)
        confirmations.set(outbound.name, confirmations.get(outbound.name) || outbound.confirmed)
        types.set(outbound.name, outbound.type)
    })

    return (
        <div className="dependencies">
            {dependencies.keys().toArray().sort().map(name => (
                <Dependency key={name} direction={dependencies.get(name)} type={types.get(name)} name={name} confirmed={confirmations.get(name)}/>
            ))}
        </div>
    )
}

Dependencies.propTypes = {
    inbounds: PropTypes.array.isRequired,
    outbounds: PropTypes.array.isRequired,
}

export default Dependencies
