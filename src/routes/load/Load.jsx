import LoadMetadata from './LoadMetadata'
import LoadControls from './LoadControls.jsx'
import Stats from '../../shared/Stats.jsx'
import Title from '../../shared/Title.jsx'
import useTitle from '../../hooks/useTitle.js'
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
