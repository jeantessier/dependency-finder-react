import ExtractMetadata from './ExtractMetadata'
import ExtractControls from './ExtractControls.jsx'
import ExtractResults from './ExtractResults.jsx'
import './Extract.css'

export default function Extract() {
    return (
        <>
            <ExtractMetadata />
            <ExtractControls />
            <ExtractResults />
        </>
    )
}
