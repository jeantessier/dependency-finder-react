import useExtractMetadata from '../../hooks/useExtractMetadata'
import './ExtractMetadata.css'

export default function ExtractMetadata() {
    const { extractMetadata, extractMetadataLoading, extractMetadataError } = useExtractMetadata()

    if (extractMetadataLoading) {
        return <p>loading ...</p>
    }

    if (extractMetadataError) {
        return <p className={'extract-metadata error'}>error loading metadata</p>
    }

    return (
        <div className={'extract-metadata'}>
            <div className={'sources'}>
                This operation will extract dependencies from the following locations:
                <ul>
                    {extractMetadata.extract.sources.map(filename =>
                        <li key={'source-filename-' + filename} className={'source value'}>{filename}</li>
                    )}
                </ul>
            </div>
            <div className={'filter-includes'}>
                It will <b>include</b> dependencies on:
                <ul>
                    {extractMetadata.extract.filterIncludes.map(s =>
                        <li key={'includes-' + s} className={'regex value'}>{s}</li>
                    )}
                </ul>
            </div>
            <div className={'filter-excludes'}>
                But it will <b>exclude</b> dependencies on:
                <ul>
                    {extractMetadata.extract.filterExcludes.map(s =>
                        <li key={'excludes-' + s} className={'regex value'}>{s}</li>
                    )}
                </ul>
            </div>
            <div>
                This operation may take a few minutes, depending on the
                size and complexity of the codebase to analyze.<br/>
                If you really want to do this at this time, please click
                on the <i>Launch</i> button.
            </div>
        </div>
    )
}
