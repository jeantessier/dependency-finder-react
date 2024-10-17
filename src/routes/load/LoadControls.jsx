import { useForm } from "react-hook-form";
import useLoadMetadata from "../../hooks/useLoadMetadata";
import './LoadControls.css'

export default function LoadControls() {
    const { register, handleSubmit } = useForm()

    const { metadata } = useLoadMetadata()
    const label = metadata && metadata.graph ? metadata.graph.label : ''

    const onSubmit = (data) => console.log(data)

    return (
        <div className={'load-controls'}>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <button type={'submit'} className={'load-controls-submit'}>Launch</button>
                optional label: <input {... register("label")} defaultValue={label} />
            </form>
        </div>
    )
}
