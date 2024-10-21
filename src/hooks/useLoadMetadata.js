import useSWR from 'swr'
import { LOAD_URL } from '../lib/constants'
import { fetcher } from '../lib/fetcher'

export default function useLoadMetadata() {
    const { data, error, isLoading } = useSWR(LOAD_URL, fetcher)

    return {
        loadMetadata: data,
        loadMetadataLoading: isLoading,
        loadMetadataError: error,
    }
}
