import useSWR from 'swr'
import { fetcher, STATS_URL } from '../lib'

export const useStats = () => {
    const { data, error, isLoading, mutate } = useSWR(STATS_URL, fetcher, { revalidateOnFocus: false })

    return {
        stats: data,
        isLoading,
        isError: error,
        mutate,
    }
}
