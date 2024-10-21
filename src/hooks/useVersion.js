import useSWR from 'swr'
import { VERSION_URL } from '../lib/constants'
import { fetcher } from '../lib/fetcher'

export default function useVersion() {
    const { data, error, isLoading } = useSWR(VERSION_URL, fetcher)

    return {
        version: data,
        versionLoading: isLoading,
        versionError: error,
    }
}
