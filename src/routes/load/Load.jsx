import LoadMetadata from './LoadMetadata'
import LoadControls from './LoadControls.jsx'
import Stats from '../../shared/Stats.jsx'
import './Load.css'

export default function Load() {
    return (
        <>
            <LoadMetadata />
            <LoadControls />
            <Stats />
        </>
    )
}
