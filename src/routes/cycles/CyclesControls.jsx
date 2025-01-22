import PropTypes from 'prop-types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CYCLES_URL, INBOUND, OUTBOUND } from '../../lib/constants'
import Title from '../../shared/Title'
import './CyclesControls.css'

function CyclesControls({ setCyclesResults }) {
    const { register, handleSubmit } = useForm()

    const [scopeIncludes, setScopeIncludes] = useState('//')
    const handleScopeIncludes = e => {
        setScopeIncludes(e.target.value)
    }

    const [scopeExcludes, setScopeExcludes] = useState('')
    const handleScopeExcludes = e => {
        setScopeExcludes(e.target.value)
    }

    const [packageScope, setPackageScope] = useState(true)
    const handlePackageScope = () => {
        setPackageScope(!packageScope)
    }

    const [classScope, setClassScope] = useState(false)
    const handleClassScope = () => {
        setClassScope(!classScope)
    }

    const [featureScope, setFeatureScope] = useState(false)
    const handleFeatureScope = () => {
        setFeatureScope(!featureScope)
    }

    const [maximumCycleLength, setMaximumCycleLength] = useState('')
    const handleMaximumCycleLength = e => {
        setMaximumCycleLength(e.target.value)
    }

    const onSubmit = (data) => {
        const request = new Request(CYCLES_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        fetch(request)
            .then(response => response.json())
            .then(json => setCyclesResults(json))
    }

    return (
        <div className="cycles-controls">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Title />

                <div className="scope-controls blue">
                    <fieldset>
                        <legend>Start with programming elements</legend>
                        <span className="scope-control">
                            <label
                                title="Check to include matching package nodes in query results."
                                htmlFor="packageScope">
                                <input {...register("packageScope")} type="checkbox"
                                       name="packageScope" id="packageScope"
                                       checked={packageScope}
                                       onChange={handlePackageScope}/> packages
                            </label>
                        </span>
                        <span className="scope-control">
                            <label
                                title="Check to include matching class nodes in query results."
                                htmlFor="classScope">
                                <input {...register("classScope")} type="checkbox"
                                       name="classScope" id="classScope"
                                       checked={classScope}
                                       onChange={handleClassScope}/> classes
                            </label>
                        </span>
                        <span className="scope-control">
                            <label
                                title="Check to include matching feature nodes in query results."
                                htmlFor="featureScope">
                                <input {...register("featureScope")} type="checkbox"
                                       name="featureScope" id="featureScope"
                                       checked={featureScope}
                                       onChange={handleFeatureScope}/> features
                            </label>
                        </span>
                        <div className="regex">
                            <label htmlFor="scopeIncludes">includes:</label>
                            <input {...register("scopeIncludes")}
                                   name="scopeIncludes" id="scopeIncludes"
                                   size={40}
                                   defaultValue={scopeIncludes}
                                   onChange={handleScopeIncludes}/>
                            <label htmlFor="scopeExcludes">excludes:</label>
                            <input {...register("scopeExcludes")}
                                   name="scopeExcludes" id="scopeExcludes"
                                   size={40}
                                   defaultValue={scopeExcludes}
                                   onChange={handleScopeExcludes}/>
                        </div>
                    </fieldset>
                </div>

                <div className="cycle-length-controls blue">
                    <fieldset>
                        <span
                            className="cycle-length-control">max length</span>
                        <span className="cycle-length-control">
                            <label
                                title="Maximum length of dependency cycles.  Empty field means no limit."
                                htmlFor="maximumCycleLength">
                                <input {...register("maximumCycleLength")}
                                       name="maximumCycleLength"
                                       id="maximumCycleLength"
                                       size={2}
                                       defaultValue={maximumCycleLength}
                                       onChange={handleMaximumCycleLength}/>
                            </label>
                        </span>
                    </fieldset>
                </div>

                <span className="submit">
                    <button type="submit" className="cycles-controls-submit">Run Cycles</button>
                </span>

            </form>
        </div>
    )
}

CyclesControls.propTypes = {
    setCyclesResults: PropTypes.func.isRequired,
}

export default CyclesControls
