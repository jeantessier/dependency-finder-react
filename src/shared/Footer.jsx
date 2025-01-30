import { Link } from 'react-router-dom'
import useStats from '../hooks/useStats'
import useVersion from '../hooks/useVersion'
import './Footer.css'

function Footer() {
    const { stats, isLoading: statsIsLoading, isError: statsIsError } = useStats()
    const { version, isLoading: versionIsLoading, isError: versionIsError } = useVersion()

    if (statsIsLoading || versionIsLoading) {
        return <p>loading ...</p>
    }

    if (statsIsError || versionIsError) {
        return <p>error loading data</p>
    }

    return (
        <div className="footer">
            <hr />
            <div className="summary">
                {stats.updateStart &&
                    <span>Current graph last updated on {stats.updateStart}.</span>
                }
                {stats.extractStart && !stats.updateStart &&
                    <span>Current graph extracted on {stats.extractStart}.</span>
                }
                {stats.loadStart &&
                    <span>Current graph loaded on {stats.loadStart}.</span>
                }
                {!stats.extractStart && !stats.loadStart &&
                    <span>There is no dependency graph at this time.</span>
                }
            </div>
            <div className="version">
                Powered by <Link to={version.implementation.url}>{version.implementation.title}</Link> {version.implementation.version} (&copy; {version.copyright.date} {version.copyright.holder})<br/>
                Compiled on {version.implementation.date}.
            </div>
        </div>
    )
}

export default Footer
