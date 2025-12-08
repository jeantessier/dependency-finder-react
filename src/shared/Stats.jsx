import { useStats } from '../hooks'
import './Stats.css'

const Stats = () => {
    const { stats, isLoading, isError } = useStats()

    if (isLoading) {
        return <p>loading ...</p>
    }

    if (isError) {
        return <p className={'stats error'}>error loading stats</p>
    }

    let graphSummary
    if (stats.loadStart || stats.extractStart || stats.updateStart) {
        graphSummary = <>
            <p>The current graph contains:</p>
            <ul>
                <li>{stats.nbPackages} package(s)</li>
                <li>{stats.nbClasses} class(es)</li>
                <li>{stats.nbFeatures} feature(s)</li>
            </ul>
        </>
    } else {
        graphSummary = <p>There is no dependency graph at this time.</p>
    }

    return (
        <div className={'stats'}>
            {graphSummary}
            {stats.extractStart &&
                <p>Extracting it took {stats.extractDurationInMillis / 1000} second(s) on {stats.extractStart}.</p>
            }
            {stats.updateStart &&
                <p>Last update took {stats.updateDurationInMillis / 1000} second(s) on {stats.updateStart}.</p>
            }
            {stats.loadStart &&
                <p>Loading it took {stats.loadDurationInMillis / 1000} second(s) on {stats.loadStart}.</p>
            }
        </div>
    )
}

export default Stats
