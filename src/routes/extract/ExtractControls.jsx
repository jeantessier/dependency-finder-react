import { useState } from "react";
import { useForm } from "react-hook-form";
import useStats from "../../hooks/useStats";
import { EXTRACT_URL } from "../../lib/constants.js";
import './ExtractControls.css'

export default function ExtractControls() {
    const { register, handleSubmit } = useForm()

    const [update, setUpdate] = useState(false)

    const handleUpdate = () => {
        setUpdate(!update)
    }

    const { stats, mutate } = useStats()
    const label = stats ? stats.label : ''

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
                <span className="launch"><button type={'submit'} className={'extract-controls-submit'}>Launch</button></span>
                <span className="label">optional label: <input {... register("label")} defaultValue={label} /></span>
                {stats && stats.extractStart &&
                    <span className="update">
                        <label title="Uncheck to discard the current graph and extract a new one from scratch" htmlFor="update">
                            <input {... register("update")} type="checkbox" name="update" id="update" checked={update} onChange={handleUpdate}/>
                            Update the current graph
                        </label>
                    </span>
                }
            </form>
        </div>
    )
}
