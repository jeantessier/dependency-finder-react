import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { METRICS_URL } from '../../lib/constants'
import Title from '../../shared/Title'
import './MetricsControls.css'
import PropTypes from 'prop-types'

function MetricsControls({ setMetricsResults }) {
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

    const [classScope, setClassScope] = useState(true)
    const handleClassScope = () => {
        setClassScope(!classScope)
    }

    const [featureScope, setFeatureScope] = useState(true)
    const handleFeatureScope = () => {
        setFeatureScope(!featureScope)
    }

    const [filterIncludes, setFilterIncludes] = useState('//')
    const handleFilterIncludes = e => {
        setFilterIncludes(e.target.value)
    }

    const [filterExcludes, setFilterExcludes] = useState('')
    const handleFilterExcludes = e => {
        setFilterExcludes(e.target.value)
    }

    const [packageFilter, setPackageFilter] = useState(true)
    const handlePackageFilter = () => {
        setPackageFilter(!packageFilter)
    }

    const [classFilter, setClassFilter] = useState(true)
    const handleClassFilter = () => {
        setClassFilter(!classFilter)
    }

    const [featureFilter, setFeatureFilter] = useState(true)
    const handleFeatureFilter = () => {
        setFeatureFilter(!featureFilter)
    }

    const [listElements, setListElements] = useState(false)
    const handleListElements = () => {
        setListElements(!listElements)
    }

    const onSubmit = (data) => {
        const request = new Request(METRICS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        console.log(`Fetching ${METRICS_URL} with data`)
        console.log(data)
        fetch(request)
            .then(response => response.json())
            .then(json => {
                console.log('Received JSON response')
                console.log(json)
                setMetricsResults(json)
            })
    }

    return (
        <div className="metrics-controls">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Title />

                <div className="metrics-scope-controls blue">
                    <fieldset>
                        <legend>Select programming elements</legend>
                        <span className="scope-control">
                            <label
                                title="Check to include matching package nodes in metrics results."
                                htmlFor="packageScope">
                                <input {...register("packageScope")} type="checkbox"
                                       name="packageScope" id="packageScope"
                                       checked={packageScope}
                                       onChange={handlePackageScope}/> packages
                            </label>
                        </span>
                        <span className="scope-control">
                            <label
                                title="Check to include matching class nodes in metrics results."
                                htmlFor="classScope">
                                <input {...register("classScope")} type="checkbox"
                                       name="classScope" id="classScope"
                                       checked={classScope}
                                       onChange={handleClassScope}/> classes
                            </label>
                        </span>
                        <span className="scope-control">
                            <label
                                title="Check to include matching feature nodes in metrics results."
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

                <div className="metrics-filter-controls blue">
                    <fieldset>
                        <legend>Show dependencies</legend>
                        <span className="filter-control">
                            <label
                                title="Check to include matching package nodes in metrics results."
                                htmlFor="packageFilter">
                                <input {...register("packageFilter")}
                                       type="checkbox"
                                       name="packageFilter" id="packageFilter"
                                       checked={packageFilter}
                                       onChange={handlePackageFilter}/> packages
                            </label>
                        </span>
                        <span className="filter-control">
                            <label
                                title="Check to include matching class nodes in metrics results."
                                htmlFor="classFilter">
                                <input {...register("classFilter")} type="checkbox"
                                       name="classFilter" id="classFilter"
                                       checked={classFilter}
                                       onChange={handleClassFilter}/> classes
                            </label>
                        </span>
                        <span className="filter-control">
                            <label
                                title="Check to include matching feature nodes in metrics results."
                                htmlFor="featureFilter">
                                <input {...register("featureFilter")}
                                       type="checkbox"
                                       name="featureFilter" id="featureFilter"
                                       checked={featureFilter}
                                       onChange={handleFeatureFilter}/> features
                            </label>
                        </span>
                        <div className="regex">
                            <label htmlFor="filterIncludes">includes:</label>
                            <input {...register("filterIncludes")}
                                   name="filterIncludes" id="filterIncludes"
                                   size={40}
                                   defaultValue={filterIncludes}
                                   onChange={handleFilterIncludes}/>
                            <label htmlFor="filterExcludes">excludes:</label>
                            <input {...register("filterExcludes")}
                                   name="filterExcludes" id="filterExcludes"
                                   size={40}
                                   defaultValue={filterExcludes}
                                   onChange={handleFilterExcludes}/>
                        </div>
                    </fieldset>
                </div>

                <div className="show-controls blue">
                    <fieldset>
                        <span className="show-control">Show</span>
                        <span className="show-control">
                            <label
                                title="Check to list programming elements in metrics results."
                                htmlFor="listElements">
                                <input {...register("listElements")}
                                       type="checkbox"
                                       name="listElements" id="listElements"
                                       checked={listElements}
                                       onChange={handleListElements}/> List programming elements
                            </label>
                        </span>
                    </fieldset>
                </div>

                <span className="submit">
                    <button type="submit" className="metrics-controls-submit">Run Metrics</button>
                </span>

            </form>
        </div>
    )
}

MetricsControls.propTypes = {
    setMetricsResults: PropTypes.func.isRequired,
}

export default MetricsControls
