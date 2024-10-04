import useExtractMetadata from '../../hooks/useExtractMetadata'
import './ExtractMetadata.css'

export default function ExtractMetadata() {
    const { metadata, isLoading, isError } = useExtractMetadata()

    if (isLoading) {
        return <p>loading ...</p>
    }

    if (isError) {
        return <p className={'extract-metadata-error'}>error loading metadata</p>
    }

    return (
        <div className={'extract-metadata'}>
            <div className={'extract-metadata-source'}>
                <span className={'extract-metadata-name'}>Source</span>:
                <span
                    className={'extract-metadata-value'}>{metadata.extract.source}</span>
            </div>
            <div className={'extract-metadata-source'}>
                <span className={'extract-metadata-name'}>Filter Includes</span>:
                <span
                    className={'extract-metadata-value'}>{metadata.extract.filterIncludes}</span>
            </div>
            <div className={'extract-metadata-source'}>
                <span className={'extract-metadata-name'}>Filter Excludes</span>:
                <span
                    className={'extract-metadata-value'}>{metadata.extract.filterExcludes}</span>
            </div>
        </div>
    )
}