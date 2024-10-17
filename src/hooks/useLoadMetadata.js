import useSWR from "swr";
import fetcher from "../lib/fetcher"

export default function useLoadMetadata() {
    const { data, error, isLoading } = useSWR('http://localhost:8080/load', fetcher)

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
