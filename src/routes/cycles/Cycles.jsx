import { useState } from 'react'
import { Footer } from '../../shared'
import { useTitle } from '../../hooks'
import CyclesControls from './CyclesControls'
import CyclesResults from './CyclesResults'
import './Cycles.css'

const Cycles = () => {
    useTitle('Cycles')

    const [cyclesResults, setCyclesResults] = useState([])

    return (
        <>
            <CyclesControls setCyclesResults={setCyclesResults} />
            <CyclesResults cyclesResults={cyclesResults} />
            <Footer />
        </>
    )
}

export default Cycles
