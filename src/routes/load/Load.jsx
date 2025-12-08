import { useTitle } from '../../hooks'
import { NavBar, Stats, Title } from '../../shared'
import LoadMetadata from './LoadMetadata'
import LoadControls from './LoadControls'
import './Load.css'

const Load = () => {
    useTitle('Load')

    return (
        <>
            <Title />
            <NavBar />
            <LoadMetadata />
            <LoadControls />
            <Stats />
        </>
    )
}

export default Load
