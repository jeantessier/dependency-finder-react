import { useState } from 'react'
import Footer from '../../shared/Footer'
import useTitle from '../../hooks/useTitle'
import CyclesControls from './CyclesControls'
import CyclesResults from './CyclesResults'
import './Cycles.css'

export default function Cycles() {
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
