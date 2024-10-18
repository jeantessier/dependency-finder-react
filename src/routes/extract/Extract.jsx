import ExtractMetadata from './ExtractMetadata'
import ExtractControls from './ExtractControls.jsx'
import Stats from '../../shared/Stats.jsx'
import Title from "../../shared/Title.jsx";
import './Extract.css'

export default function Extract() {
    return (
        <>
            <Title />
            <ExtractMetadata />
            <ExtractControls />
            <Stats />
        </>
    )
}
