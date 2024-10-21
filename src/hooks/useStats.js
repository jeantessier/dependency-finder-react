import useSWR from 'swr'
import { STATS_URL } from '../lib/constants'
import { fetcher } from '../lib/fetcher'

export default function useStats() {
    const { data, error, isLoading, mutate } = useSWR(STATS_URL, fetcher)

    return {
        stats: data,
        statsLoading: isLoading,
        statsError: error,
        mutateStats: mutate,
    }
}
