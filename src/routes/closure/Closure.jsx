import { useState } from 'react'
import { useTitle } from '../../hooks'
import { Footer } from '../../shared'
import ClosureControls from './ClosureControls'
import ClosureResults from './ClosureResults'
import './Closure.css'

const Closure = () => {
    useTitle('Closure')

    const [closureResults, setClosureResults] = useState([])

    return (
        <>
            <ClosureControls setClosureResults={setClosureResults} />
            <ClosureResults closureResults={closureResults} type="packages" />
            <Footer />
        </>
    )
}

export default Closure
