import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Footer } from '../../shared'
import MetricsControls from './MetricsControls'
import MetricsResults from './MetricsResults'
import './Metrics.css'

const Metrics = () => {
    useTitle('Metrics')

    const [searchParams, setSearchParams] = useSearchParams()
    const getStringParams = (name, defaultValue) => searchParams.has(name) ? searchParams.get(name) : defaultValue
    const getBooleanParams = (name, defaultValue) => searchParams.has(name) ? searchParams.get(name) === 'true' : defaultValue

    const initForm = {
        scopeIncludes: getStringParams('scopeIncludes', "//"),
        scopeExcludes: getStringParams('scopeExcludes', ""),
        packageScope: getBooleanParams('packageScope', true),
        classScope: getBooleanParams('classScope', false),
        featureScope: getBooleanParams('featureScope', false),
        filterIncludes: getStringParams('filterIncludes', "//"),
        filterExcludes: getStringParams('filterExcludes', ""),
        packageFilter: getBooleanParams('packageFilter', true),
        classFilter: getBooleanParams('classFilter', false),
        featureFilter: getBooleanParams('featureFilter', false),
        listElements: getBooleanParams('listElements', false),
        chart: getBooleanParams('chart', false),
        histograms: getBooleanParams('histograms', false),
    }

    const [form, setForm] = useState(initForm)
    const [metricsResults, setMetricsResults] = useState(null)

    const handleTextChange = e => {
        const updatedForm = { ...form, [e.target.name]: e.target.value }

        setForm(updatedForm)
        setSearchParams(updatedForm)
    }

    const handleFlagChange = e => {
        const updatedForm = { ...form, [e.target.name]: e.target.checked }

        setForm(updatedForm)
        setSearchParams(updatedForm)
    }

    const onNameClick = name => {
        const regex = `/^${name.replaceAll(/([$()[\]])/g, '\\$1')}/`
        console.log(regex)
        const updatedForm = { ...form, scopeIncludes: regex }

        setForm(updatedForm)
        setSearchParams(updatedForm)
    }

    return (
        <>
            <MetricsControls form={form} handleTextChange={handleTextChange} handleFlagChange={handleFlagChange} setMetricsResults={setMetricsResults} />
            <MetricsResults metricsResults={metricsResults} onNameClick={onNameClick} />
            <Footer />
        </>
    )
}

export default Metrics
