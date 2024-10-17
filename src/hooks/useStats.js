import useSWR from "swr";
import fetcher from "../lib/fetcher"

export default function useExtractMetadata() {
    const { data, error, isLoading } = useSWR('http://localhost:8080/stats', fetcher)

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
