import { useStats } from '../hooks'
import './Title.css'

const Title = () => {
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

export default Title
