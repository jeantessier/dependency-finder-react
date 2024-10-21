import useStats from '../hooks/useStats'
import './Stats.css'

export default function Stats() {
    const { stats, statsLoading, statsError } = useStats()

    if (statsLoading) {
        return <p>loading ...</p>
    }

    if (statsError) {
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