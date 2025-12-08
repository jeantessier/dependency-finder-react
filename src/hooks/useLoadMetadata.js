import useSWR from 'swr'
import { fetcher, LOAD_URL } from '../lib'

export const useLoadMetadata = () => {
    const { data, error, isLoading } = useSWR(LOAD_URL, fetcher, { revalidateOnFocus: false })

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
