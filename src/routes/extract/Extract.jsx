import ExtractMetadata from './ExtractMetadata'
import ExtractControls from './ExtractControls'
import Stats from '../../shared/Stats'
import Title from '../../shared/Title'
import useTitle from '../../hooks/useTitle'
import './Extract.css'

export default function Extract() {
    useTitle('Extract')

    return (
        <>
            <Title />
            <ExtractMetadata />
            <ExtractControls />
            <Stats />
        </>
    )
}
