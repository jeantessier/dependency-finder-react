import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Footer } from '../../shared'
import ClosureControls from './ClosureControls'
import ClosureResults from './ClosureResults'
import './Closure.css'

const Closure = () => {
    useTitle('Closure')

    const [searchParams, setSearchParams] = useSearchParams()
    const getStringParams = (name, defaultValue) => searchParams.has(name) ? searchParams.get(name) : defaultValue

    const initForm = {
        startIncludes: getStringParams('startIncludes', '//'),
        startExcludes: getStringParams('startExcludes', ''),
        stopIncludes: getStringParams('stoprIncludes', ''),
        stopExcludes: getStringParams('stopExcludes', ''),
        maximumInboundDepth: getStringParams('maximumInboundDepth', '0'),
        maximumOutboundDepth: getStringParams('maximumOutboundDepth', ''),
        scope: getStringParams('scope', 'feature'),
        filter: getStringParams('filter', 'feature'),
    }

    const [form, setForm] = useState(initForm)
    const [closureResults, setClosureResults] = useState([])

    const handleTextChange = e => {
        const updatedForm = { ...form, [e.target.name]: e.target.value }

        setForm(updatedForm)
        setSearchParams(updatedForm)
    }

    const onNameClick = name => {
        const regex = `/^${name.replaceAll(/([$()[\]])/g, '\\$1')}/`
        const updatedForm = { ...form, startIncludes: regex }

        setForm(updatedForm)
        setSearchParams(updatedForm)
    }

    return (
        <>
            <ClosureControls form={form} handleTextChange={handleTextChange} setClosureResults={setClosureResults} />
            <ClosureResults closureResults={closureResults} type="packages" onNameClick={onNameClick} />
            <Footer />
        </>
    )
}

export default Closure
