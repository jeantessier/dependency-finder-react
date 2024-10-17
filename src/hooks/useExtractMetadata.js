import useSWR from "swr"
import { SERVER_BASE_URL } from "../lib/constants"
import { fetcher } from "../lib/fetcher"

export default function useExtractMetadata() {
    const { data, error, isLoading } = useSWR(SERVER_BASE_URL + '/extract', fetcher)

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
