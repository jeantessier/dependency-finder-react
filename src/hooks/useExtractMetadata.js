import useSWR from 'swr'
import { EXTRACT_URL } from '../lib/constants'
import { fetcher } from '../lib/fetcher'

export default function useExtractMetadata() {
    const { data, error, isLoading } = useSWR(EXTRACT_URL, fetcher, { revalidateOnFocus: false })

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
