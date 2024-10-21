import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { QUERY_URL, INBOUND, OUTBOUND } from '../../lib/constants'
import './QueryControls.css'

export default function QueryControls({ setQueryResults }) {
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
        <div className="QueryControls">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="scope-controls">
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
                                       onChange={handleFeatureScope}/> packages
                            </label>
                        </span>
                        <div className="scope-regex">
                            includes:
                            <input {...register("scopeIncludes")}
                                   defaultValue={scopeIncludes}
                                   onChange={handleScopeIncludes}/>
                        </div>
                        <div className="scope-regex">
                            excludes:
                            <input {...register("scopeExcludes")}
                                   defaultValue={scopeExcludes}
                                   onChange={handleScopeExcludes}/>
                        </div>
                    </fieldset>
                </div>

                <div className="filter-controls">
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
                                       onChange={handleFeatureFilter}/> packages
                            </label>
                        </span>
                        <div className="filter-regex">
                            includes:
                            <input {...register("filterIncludes")}
                                   defaultValue={filterIncludes}
                                   onChange={handleFilterIncludes}/>
                        </div>
                        <div className="filter-regex">
                            excludes:
                            <input {...register("filterExcludes")}
                                   defaultValue={filterExcludes}
                                   onChange={handleFilterExcludes}/>
                        </div>
                    </fieldset>
                </div>

                <div className="show-controls">
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
