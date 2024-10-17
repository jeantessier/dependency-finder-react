import { useForm } from "react-hook-form";
import useExtractMetadata from "../../hooks/useExtractMetadata";
import './ExtractControls.css'

export default function ExtractControls() {
    const { register, handleSubmit } = useForm()

    const { metadata } = useExtractMetadata()
    const label = metadata && metadata.graph ? metadata.graph.label : ''

    const onSubmit = (data) => console.log(data)

    return (
        <div className={'extract-controls'}>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <button type={'submit'} className={'extract-controls-submit'}>Launch</button>
                optional label: <input {... register("label")} defaultValue={label} />
                {metadata && metadata.graph.extractStart &&
                    <>
                        <br/>
                        <label title="Uncheck to discard the current graph and extract a new one from scratch" htmlFor="update">
                            <input {... register("update")} type="checkbox" name="update" checked id="update"/>
                            Update the current graph
                        </label>
                    </>
                }
            </form>
        </div>
    )
}
