import { useTitle } from '../../hooks'
import { NavBar, Stats, Title } from '../../shared'
import ExtractMetadata from './ExtractMetadata'
import ExtractControls from './ExtractControls'
import './Extract.css'

const Extract = () => {
    useTitle('Extract')

    return (
        <>
            <Title />
            <NavBar />
            <ExtractMetadata />
            <ExtractControls />
            <Stats />
        </>
    )
}

export default Extract
