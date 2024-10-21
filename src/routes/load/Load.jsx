import LoadMetadata from './LoadMetadata'
import LoadControls from './LoadControls'
import Stats from '../../shared/Stats'
import Title from '../../shared/Title'
import useTitle from '../../hooks/useTitle'
import './Load.css'

export default function Load() {
    useTitle('Load')

    return (
        <>
            <Title />
            <LoadMetadata />
            <LoadControls />
            <Stats />
        </>
    )
}
