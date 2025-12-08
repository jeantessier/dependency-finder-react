import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Footer } from '../../shared'
import { useTitle } from '../../hooks'
import QueryControls from './QueryControls'
import QueryResults from './QueryResults'
import './Query.css'

const Query = () => {
    useTitle('Query')

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
        showInbounds: getBooleanParams('showInbounds', true),
        showOutbounds: getBooleanParams('showOutbounds', true),
        showEmptyNodes: getBooleanParams('showEmptyNodes', false),
    }

    const [form, setForm] = useState(initForm)
    const [queryResults, setQueryResults] = useState([])

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
        const updatedForm = { ...form, scopeIncludes: regex }

        setForm(updatedForm)
        setSearchParams(updatedForm)
    }

    return (
        <>
            <QueryControls form={form} handleTextChange={handleTextChange} handleFlagChange={handleFlagChange} setQueryResults={setQueryResults} />
            <QueryResults queryResults={queryResults} type="packages" onNameClick={onNameClick} />
            <Footer />
        </>
    )
}

export default Query
