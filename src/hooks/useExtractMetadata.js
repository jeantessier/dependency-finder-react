import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useExtractMetadata() {
    const { data, error, isLoading } = useSWR('http://localhost:8080/extract', fetcher)

    return {
        metadata: data,
        isLoading,
        isError: error,
    }
}
