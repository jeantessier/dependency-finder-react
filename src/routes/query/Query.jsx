import { useState } from 'react'
import { Footer } from '../../shared'
import { useTitle } from '../../hooks'
import QueryControls from './QueryControls'
import QueryResults from './QueryResults'
import './Query.css'

const Query = () => {
    useTitle('Query')

    const [queryResults, setQueryResults] = useState([])

    const onNameClick = name => {
        const regex = `/^${name.replaceAll(/([$()[\]])/g, '\\$1')}/`
        console.log(regex)
    }

    return (
        <>
            <QueryControls setQueryResults={setQueryResults} />
            <QueryResults queryResults={queryResults} type="packages" onNameClick={onNameClick} />
            <Footer />
        </>
    )
}

export default Query
