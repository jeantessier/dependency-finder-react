import useStats from '../hooks/useStats'
import './Title.css'

export default function Title() {
    const { stats, isLoading, isError } = useStats()

    if (isLoading) {
        return <p>loading ...</p>
    }

    if (isError) {
        return <p className={'stats error'}>error loading stats</p>
    }

    return (
        <div className={'title'}>
            <span className={'name'}>{stats?.name}</span>
            {stats.label &&
                <span className={'label'}>{stats.label}</span>
            }
        </div>
    )
}
