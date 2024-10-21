import useLoadMetadata from '../../hooks/useLoadMetadata'
import './LoadMetadata.css'

export default function LoadMetadata() {
    const { loadMetadata, loadMetadataLoading, loadMetadataError } = useLoadMetadata()

    if (loadMetadataLoading) {
        return <p>loading ...</p>
    }

    if (loadMetadataError) {
        return <p className={'load-metadata error'}>error loading metadata</p>
    }

    return (
        <div className={'load-metadata'}>
            <div className={'files'}>
                This operation will load a dependency graph from the following locations:
                <ul>
                    {loadMetadata.load.files.map(filename =>
                        <li key={'source-filename-' + filename} className={'file value'}>{filename}</li>
                    )}
                </ul>
            </div>
            <div>
                This operation may take a few minutes, depending on the
                size and complexity of the dependency graph.<br/>
                If you really want to do this at this time, please click
                on the <i>Launch</i> button.
            </div>
        </div>
    )
}
