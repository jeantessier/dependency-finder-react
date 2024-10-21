import { useState } from 'react'
import Title from '../../shared/Title'
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
            <Title />
            <QueryControls setQueryResults={setQueryResults} />
            <QueryResults queryResults={queryResults} />
            <Footer />
        </>
    )
}
