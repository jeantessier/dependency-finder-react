import { useState } from 'react'
import { useTitle } from '../../hooks'
import { Footer } from '../../shared'
import MetricsControls from './MetricsControls'
import MetricsResults from './MetricsResults'
import './Metrics.css'

const Metrics = () => {
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

export default Metrics
