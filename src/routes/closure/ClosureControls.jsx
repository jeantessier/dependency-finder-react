import PropTypes from 'prop-types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CLOSURE_URL, INBOUND, OUTBOUND } from '../../lib/constants'
import Title from '../../shared/Title'
import './ClosureControls.css'

function ClosureControls({ setClosureResults }) {
    const { register, handleSubmit } = useForm()

    const [startIncludes, setStartIncludes] = useState('//')
    const handleStartIncludes = e => {
        setStartIncludes(e.target.value)
    }

    const [startExcludes, setStartExcludes] = useState('')
    const handleStartExcludes = e => {
        setStartExcludes(e.target.value)
    }

    const [stopIncludes, setStopIncludes] = useState('')
    const handleStopIncludes = e => {
        setStopIncludes(e.target.value)
    }

    const [stopExcludes, setStopExcludes] = useState('')
    const handleStopExcludes = e => {
        setStopExcludes(e.target.value)
    }

    const [maximumInboundDepth, setMaximumInboundDepth] = useState('0')
    const handleMaximumInboundDepth = e => {
        setMaximumInboundDepth(e.target.value)
    }

    const [maximumOutboundDepth, setMaximumOutboundDepth] = useState('')
    const handleMaximumOutboundDepth = e => {
        setMaximumOutboundDepth(e.target.value)
    }

    const [scope, setScope] = useState('feature')
    const handleScope = e => {
        setScope(e.target.value)
    }

    const [filter, setFilter] = useState('feature')
    const handleFilter = e => {
        setFilter(e.target.value)
    }

    const onSubmit = (data) => {
        const request = new Request(CLOSURE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        fetch(request)
            .then(response => response.json())
            .then(json => setClosureResults(json))
    }

    return (
        <div className="closure-controls">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Title />

                <div className="closure-start-controls blue">
                    <fieldset>
                        <legend>Start with programming elements</legend>
                        <div className="regex">
                            <label htmlFor="startIncludes">includes:</label>
                            <input {...register("startIncludes")}
                                   name="startIncludes" id="startIncludes"
                                   size={40}
                                   defaultValue={startIncludes}
                                   onChange={handleStartIncludes}/>
                            <label htmlFor="startExcludes">excludes:</label>
                            <input {...register("startExcludes")}
                                   name="startExcludes" id="startExcludes"
                                   size={40}
                                   defaultValue={startExcludes}
                                   onChange={handleStartExcludes}/>
                        </div>
                    </fieldset>
                </div>

                <div className="closure-stop-controls blue">
                    <fieldset>
                        <legend>Stop with programming elements</legend>
                        <div className="regex">
                            <label htmlFor="stopIncludes">includes:</label>
                            <input {...register("stopIncludes")}
                                   name="stopIncludes" id="stopIncludes"
                                   size={40}
                                   defaultValue={stopIncludes}
                                   onChange={handleStopIncludes}/>
                            <label htmlFor="stopExcludes">excludes:</label>
                            <input {...register("stopExcludes")}
                                   name="stopExcludes" id="stopExcludes"
                                   size={40}
                                   defaultValue={stopExcludes}
                                   onChange={handleStopExcludes}/>
                        </div>
                    </fieldset>
                </div>

                <div className="closure-depth-controls blue">
                    <fieldset>
                        <span className="depth-control">
                            <label
                                title="Maximum hops against the direction dependencies.  Empty field means no limit."
                                htmlFor="maximumInboundDepth">
                                <input {...register("maximumInboundDepth")}
                                       name="maximumInboundDepth"
                                       id="maximumInboundDepth"
                                       size={2}
                                       defaultValue={maximumInboundDepth}
                                       onChange={handleMaximumInboundDepth}/>
                            </label>
                        </span>
                        <span
                            className="depth-control">{INBOUND} follow {OUTBOUND}</span>
                        <span className="depth-control">
                            <label
                                title="Maximum hops in the direction of dependencies.  Empty field means no limit."
                                htmlFor="maximumOutboundDepth">
                                <input {...register("maximumOutboundDepth")}
                                       name="maximumOutboundDepth"
                                       id="maximumOutboundDepth"
                                       size={2}
                                       defaultValue={maximumOutboundDepth}
                                       onChange={handleMaximumOutboundDepth}/>
                            </label>
                        </span>
                    </fieldset>
                </div>

                <div className="closure-scope-controls blue">
                    <fieldset>
                        <legend>Summarize programming elements</legend>
                        <span>
                            <label htmlFor="packageScope">
                                <input {...register("scope")}
                                       name="scope"
                                       id="packageScope"
                                       type="radio"
                                       value="package"
                                       checked={scope === 'package'}
                                       onChange={handleScope}/> package
                            </label>
                        </span>
                        <span>
                            <label htmlFor="classScope">
                                <input {...register("scope")}
                                       name="scope"
                                       id="classScope"
                                       type="radio"
                                       value="class"
                                       checked={scope === 'class'}
                                       onChange={handleScope}/> class
                            </label>
                        </span>
                        <span>
                            <label htmlFor="featureScope">
                                <input {...register("scope")}
                                       name="scope"
                                       id="featureScope"
                                       type="radio"
                                       value="feature"
                                       checked={scope === 'feature'}
                                       onChange={handleScope}/> feature
                            </label>
                        </span>
                    </fieldset>
                </div>

                <div className="closure-filter-controls blue">
                    <fieldset>
                        <legend>Summarize dependencies</legend>
                        <span>
                            <label htmlFor="packageFilter">
                                <input {...register("filter")}
                                       name="filter"
                                       id="packageFilter"
                                       type="radio"
                                       value="package"
                                       checked={filter === 'package'}
                                       onChange={handleFilter}/> package
                            </label>
                        </span>
                        <span>
                            <label htmlFor="classFilter">
                                <input {...register("filter")}
                                       name="filter"
                                       id="classFilter"
                                       type="radio"
                                       value="class"
                                       checked={filter === 'class'}
                                       onChange={handleFilter}/> class
                            </label>
                        </span>
                        <span>
                            <label htmlFor="featureFilter">
                                <input {...register("filter")}
                                       name="filter"
                                       id="featureFilter"
                                       type="radio"
                                       value="feature"
                                       checked={filter === 'feature'}
                                       onChange={handleFilter}/> feature
                            </label>
                        </span>
                    </fieldset>
                </div>

                <span className="submit">
                    <button type="submit" className="closure-controls-submit">Run Closure</button>
                </span>

            </form>
        </div>
    )
}

ClosureControls.propTypes = {
    setClosureResults: PropTypes.func.isRequired,
}

export default ClosureControls
