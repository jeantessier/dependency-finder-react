import ExtractMetadata from './ExtractMetadata'
import ExtractControls from './ExtractControls.jsx'
import Stats from '../../shared/Stats.jsx'
import './Extract.css'

export default function Extract() {
    return (
        <>
            <ExtractMetadata />
            <ExtractControls />
            <Stats />
        </>
    )
}
