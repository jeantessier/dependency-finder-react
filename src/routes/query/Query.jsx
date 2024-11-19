import { useState } from 'react'
import Footer from '../../shared/Footer'
import useTitle from '../../hooks/useTitle'
import QueryControls from './QueryControls'
import QueryResults from './QueryResults'
import './Query.css'

export default function Query() {
    useTitle('Query')

    const [queryResults, setQueryResults] = useState([])

    return (
        <>
            <QueryControls setQueryResults={setQueryResults} />
            <QueryResults queryResults={queryResults} type="packages" />
            <Footer />
        </>
    )
}
