import useExtractMetadata from "../../hooks/useExtractMetadata.js"
import './ExtractResults.css'

export default function ExtractResults() {
    const { metadata, isLoading, isError } = useExtractMetadata()

    if (isLoading) {
        return <p>loading ...</p>
    }

    if (isError) {
        return <p className={'extract-metadata error'}>error loading metadata</p>
    }

    let graphSummary
    if (metadata.graph.loadStart || metadata.graph.extractStart || metadata.graph.updateStart) {
        graphSummary = <>
            <p>The current graph contains:</p>
            <ul>
                <li>{metadata.graph.nbPackages} package(s)</li>
                <li>{metadata.graph.nbClasses} class(es)</li>
                <li>{metadata.graph.nbFeatures} feature(s)</li>
            </ul>
        </>
    } else {
        graphSummary = <p>There is no dependency graph at this time.</p>
    }

    return (
        <div className={'extract-results'}>
            {graphSummary}
            {metadata.graph.extractStart &&
                <p>Extracting it took {metadata.graph.extractDurationInMillis / 1000} second(s) on {metadata.graph.extractStart}.</p>
            }
            {metadata.graph.updateStart &&
                <p>Last update took {metadata.graph.updateDurationInMillis / 1000} second(s) on {metadata.graph.updateStart}.</p>
            }
        </div>
    )
}