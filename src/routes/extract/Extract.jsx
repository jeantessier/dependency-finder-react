import ExtractMetadata from './ExtractMetadata'
import ExtractControls from './ExtractControls'
import NavBar from '../../shared/NavBar'
import Stats from '../../shared/Stats'
import Title from '../../shared/Title'
import useTitle from '../../hooks/useTitle'
import './Extract.css'

export default function Extract() {
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
