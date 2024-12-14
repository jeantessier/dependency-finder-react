import { useState } from 'react'
import Footer from '../../shared/Footer'
import useTitle from '../../hooks/useTitle'
import ClosureControls from './ClosureControls'
import ClosureResults from './ClosureResults'
import './Closure.css'

export default function Closure() {
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
