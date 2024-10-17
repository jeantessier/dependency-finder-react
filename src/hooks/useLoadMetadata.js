import useSWR from "swr"
import { SERVER_BASE_URL } from "../lib/constants"
import { fetcher } from "../lib/fetcher"

export default function useLoadMetadata() {
    const { data, error, isLoading } = useSWR(SERVER_BASE_URL + '/load', fetcher)

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
