import { useForm } from "react-hook-form";
import useExtractMetadata from "../../hooks/useExtractMetadata";
import useStats from "../../hooks/useStats";
import { EXTRACT_URL } from "../../lib/constants.js";
import './ExtractControls.css'

export default function ExtractControls() {
    const { register, handleSubmit } = useForm()

    const { stats, mutate } = useStats()
    const label = stats ? stats.label : ''

    const { metadata } = useExtractMetadata()

    const onSubmit = (data) => {
        console.log(data)
        const request = new Request(EXTRACT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            redirect: "manual",
        })
        fetch(request)
            .then(response => {
                console.log(`Fetched ${request.url}, got response:`)
                console.log(response)
                mutate()
            })
    }

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
