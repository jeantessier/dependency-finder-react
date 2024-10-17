import useStats from "../hooks/useStats.js"
import './Stats.css'

export default function Stats() {
    const { metadata, isLoading, isError } = useStats()

    if (isLoading) {
        return <p>loading ...</p>
    }

    if (isError) {
        return <p className={'stats error'}>error loading metadata</p>
    }

    let graphSummary
    if (metadata.loadStart || metadata.extractStart || metadata.updateStart) {
        graphSummary = <>
            <p>The current graph contains:</p>
            <ul>
                <li>{metadata.nbPackages} package(s)</li>
                <li>{metadata.nbClasses} class(es)</li>
                <li>{metadata.nbFeatures} feature(s)</li>
            </ul>
        </>
    } else {
        graphSummary = <p>There is no dependency graph at this time.</p>
    }

    return (
        <div className={'stats'}>
            {graphSummary}
            {metadata.extractStart &&
                <p>Extracting it took {metadata.extractDurationInMillis / 1000} second(s) on {metadata.extractStart}.</p>
            }
            {metadata.updateStart &&
                <p>Last update took {metadata.updateDurationInMillis / 1000} second(s) on {metadata.updateStart}.</p>
            }
            {metadata.loadStart &&
                <p>Loading it took {metadata.loadDurationInMillis / 1000} second(s) on {metadata.loadStart}.</p>
            }
        </div>
    )
}