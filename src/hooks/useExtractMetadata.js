import useSWR from 'swr'
import { EXTRACT_URL, fetcher } from '../lib'

export const useExtractMetadata = () => {
    const { data, error, isLoading } = useSWR(EXTRACT_URL, fetcher, { revalidateOnFocus: false })

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
