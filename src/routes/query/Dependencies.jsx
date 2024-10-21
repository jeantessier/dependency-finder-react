import { INBOUND, OUTBOUND, BIDIRECTIONAL } from '../../lib/constants'
import Dependency from './Dependency'
import './Dependencies.css'

export default function Dependencies({ inbounds, outbounds }) {
    const dependencies = new Map()
    const confirmations = new Map()

    inbounds.forEach(inbound => {
        dependencies.set(inbound.name, INBOUND)
        confirmations.set(inbound.name, inbound.confirmed)
    })
    outbounds.forEach(outbound => {
        dependencies.set(outbound.name, dependencies.has(outbound.name) ? BIDIRECTIONAL : OUTBOUND)
        confirmations.set(outbound.name, confirmations.get(outbound.name) || outbound.confirmed)
    })

    return (
        <blockquote>
            {dependencies.keys().toArray().sort().map(name => (
                <Dependency key={name} name={name} confirmed={confirmations.get(name)} direction={dependencies.get(name)}/>
            ))}
        </blockquote>
    )
}
