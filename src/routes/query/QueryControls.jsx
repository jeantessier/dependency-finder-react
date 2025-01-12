import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { QUERY_URL, INBOUND, OUTBOUND } from '../../lib/constants'
import Title from '../../shared/Title'
import './QueryControls.css'
import PropTypes from 'prop-types'

function QueryControls({ setQueryResults }) {
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

    const [classFilter, setClassFilter] = useState(false)
    const handleClassFilter = () => {
        setClassFilter(!classFilter)
    }

    const [featureFilter, setFeatureFilter] = useState(false)
    const handleFeatureFilter = () => {
        setFeatureFilter(!featureFilter)
    }

    const [showInbounds, setShowInbounds] = useState(true)
    const handleShowInbounds = () => {
        setShowInbounds(!showInbounds)
    }

    const [showOutbounds, setShowOutbounds] = useState(true)
    const handleShowOutbounds = () => {
        setShowOutbounds(!showOutbounds)
    }

    const [showShowEmptyNodes, setShowEmptyNodes] = useState(true)
    const handleShowEmptyNodes = () => {
        setShowEmptyNodes(!showShowEmptyNodes)
    }

    const onSubmit = (data) => {
        const request = new Request(QUERY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        fetch(request)
            .then(response => response.json())
            .then(json => setQueryResults(json))
    }

    return (
        <div className="query-controls">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Title />

                <div className="scope-controls blue">
                    <fieldset>
                        <legend>Select programming elements</legend>
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

                <div className="filter-controls blue">
                    <fieldset>
                        <legend>Show dependencies</legend>
                        <span className="filter-control">
                            <label
                                title="Check to include matching package nodes in query results."
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
                                title="Check to include matching class nodes in query results."
                                htmlFor="classFilter">
                                <input {...register("classFilter")} type="checkbox"
                                       name="classFilter" id="classFilter"
                                       checked={classFilter}
                                       onChange={handleClassFilter}/> classes
                            </label>
                        </span>
                        <span className="filter-control">
                            <label
                                title="Check to include matching feature nodes in query results."
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
                                title="Check to include matching package nodes in query results."
                                htmlFor="showInbounds">
                                <input {...register("showInbounds")}
                                       type="checkbox"
                                       name="showInbounds" id="showInbounds"
                                       checked={showInbounds}
                                       onChange={handleShowInbounds}/> {INBOUND}
                            </label>
                        </span>
                        <span className="show-control">
                            <label
                                title="Check to include matching package nodes in query results."
                                htmlFor="showOutbounds">
                                <input {...register("showOutbounds")}
                                       type="checkbox"
                                       name="showOutbounds" id="showOutbounds"
                                       checked={showOutbounds}
                                       onChange={handleShowOutbounds}/> {OUTBOUND}
                            </label>
                        </span>
                        <span className="show-control">
                            <label
                                title="Check to include matching package nodes in query results."
                                htmlFor="showEmptyNodes">
                                <input {...register("showEmptyNodes")}
                                       type="checkbox"
                                       name="showEmptyNodes" id="showEmptyNodes"
                                       checked={showShowEmptyNodes}
                                       onChange={handleShowEmptyNodes}/> empty nodes
                            </label>
                        </span>
                    </fieldset>
                </div>

                <span className="submit">
                    <button type="submit" className="query-controls-submit">Run Query</button>
                </span>

            </form>
        </div>
    )
}

QueryControls.propTypes = {
    setQueryResults: PropTypes.func.isRequired,
}

export default QueryControls
