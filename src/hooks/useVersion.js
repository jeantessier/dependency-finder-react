import useSWR from 'swr'
import { fetcher, VERSION_URL } from '../lib'

export const useVersion = () => {
    const { data, error, isLoading } = useSWR(VERSION_URL, fetcher, { revalidateOnFocus: false })

    return {
        version: data,
        isLoading,
        isError: error,
    }
}
