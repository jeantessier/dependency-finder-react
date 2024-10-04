import ExtractMetadata from './ExtractMetadata'
import './Extract.css'

export default function Extract() {
    return (
        <>
            <ExtractMetadata />
            <div className={'extract-controls'}>
                <p>Extract controls go here.</p>
            </div>
            <div className={'extract-results'}>
                <p>Extract results go here.</p>
            </div>
        </>
    )
}
