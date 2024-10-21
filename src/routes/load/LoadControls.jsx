import { useForm } from 'react-hook-form'
import useStats from '../../hooks/useStats'
import { LOAD_URL } from '../../lib/constants'
import './LoadControls.css'

export default function LoadControls() {
    const { register, handleSubmit } = useForm()

    const { stats, mutate } = useStats()
    const label = stats ? stats.label : ''

    const onSubmit = (data) => {
        const request = new Request(LOAD_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            redirect: "manual",
        })
        fetch(request)
            .then(mutate)
    }

    return (
        <div className={'load-controls'}>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className="launch"><button type={'submit'} className={'load-controls-submit'}>Launch</button></span>
                <span className="label">optional label: <input {...register("label")} defaultValue={label} /></span>
            </form>
        </div>
    )
}
