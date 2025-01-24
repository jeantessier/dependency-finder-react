import { useState } from 'react'
import Footer from '../../shared/Footer'
import useTitle from '../../hooks/useTitle'
import MetricsControls from './MetricsControls'
import MetricsResults from './MetricsResults'
import './Metrics.css'

export default function Metrics() {
    useTitle('Metrics')

    const [metricsResults, setMetricsResults] = useState(null)

    return (
        <>
            <MetricsControls setMetricsResults={setMetricsResults} />
            <MetricsResults metricsResults={metricsResults} />
            <Footer />
        </>
    )
}
