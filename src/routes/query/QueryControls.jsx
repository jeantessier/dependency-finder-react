import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { useVersion } from '../../hooks'
import { QUERY_URL, INBOUND, OUTBOUND } from '../../lib'
import { NavBar, Title } from '../../shared'
import './QueryControls.css'

const QueryControls = ({ setQueryResults }) => {
    const { version, isLoading: versionIsLoading, isError: versionIsError } = useVersion()

    const { register, handleSubmit } = useForm()

    const [searchParams, setSearchParams] = useSearchParams()

    const getStringParams = (name, defaultValue) => {
        if (searchParams.has(name)) {
            return searchParams.get(name)
        } else {
            return defaultValue
        }
    }

    const getBooleanParams = (name, defaultValue) => {
        if (searchParams.has(name)) {
            return searchParams.get(name) === 'true'
        } else {
            return defaultValue
        }
    }

    const [scopeIncludes, setScopeIncludes] = useState(getStringParams('scopeIncludes', '//'))
    const handleScopeIncludes = e => {
        setScopeIncludes(e.target.value)
    }

    const [scopeExcludes, setScopeExcludes] = useState(getStringParams('scopeExcludes', ''))
    const handleScopeExcludes = e => {
        setScopeExcludes(e.target.value)
    }

    const [packageScope, setPackageScope] = useState(getBooleanParams('packageScope', true))
    const handlePackageScope = () => {
        setPackageScope(!packageScope)
    }

    const [classScope, setClassScope] = useState(getBooleanParams('classScope', false))
    const handleClassScope = () => {
        setClassScope(!classScope)
    }

    const [featureScope, setFeatureScope] = useState(getBooleanParams('featureScope', false))
    const handleFeatureScope = () => {
        setFeatureScope(!featureScope)
    }

    const [filterIncludes, setFilterIncludes] = useState(getStringParams('filterIncludes', '//'))
    const handleFilterIncludes = e => {
        setFilterIncludes(e.target.value)
    }

    const [filterExcludes, setFilterExcludes] = useState(getStringParams('filterExcludes', ''))
    const handleFilterExcludes = e => {
        setFilterExcludes(e.target.value)
    }

    const [packageFilter, setPackageFilter] = useState(getBooleanParams('packageFilter', true))
    const handlePackageFilter = () => {
        setPackageFilter(!packageFilter)
    }

    const [classFilter, setClassFilter] = useState(getBooleanParams('classFilter', false))
    const handleClassFilter = () => {
        setClassFilter(!classFilter)
    }

    const [featureFilter, setFeatureFilter] = useState(getBooleanParams('featureFilter', false))
    const handleFeatureFilter = () => {
        setFeatureFilter(!featureFilter)
    }

    const [showInbounds, setShowInbounds] = useState(getBooleanParams('showInbounds', true))
    const handleShowInbounds = () => {
        setShowInbounds(!showInbounds)
    }

    const [showOutbounds, setShowOutbounds] = useState(getBooleanParams('showOutbounds', true))
    const handleShowOutbounds = () => {
        setShowOutbounds(!showOutbounds)
    }

    const [showEmptyNodes, setShowEmptyNodes] = useState(getBooleanParams('showEmptyNodes', true))
    const handleShowEmptyNodes = () => {
        setShowEmptyNodes(!showEmptyNodes)
    }

    const onSubmit = data => {
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
        setSearchParams(data)
    }

    useEffect(
        () => {
            onSubmit({
                scopeIncludes,
                scopeExcludes,
                packageScope,
                classScope,
                featureScope,
                filterIncludes,
                filterExcludes,
                packageFilter,
                classFilter,
                featureFilter,
                showInbounds,
                showOutbounds,
                showEmptyNodes,
            })
        },
        [
            // scopeIncludes,
            // scopeExcludes,
            packageScope,
            classScope,
            featureScope,
            // filterIncludes,
            // filterExcludes,
            packageFilter,
            classFilter,
            featureFilter,
            showInbounds,
            showOutbounds,
            showEmptyNodes,
        ],
    )

    return (
        <div className="query-controls">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Title />

                <NavBar />

                <div className="query-scope-controls blue">
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

                <div className="query-filter-controls blue">
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
                                       checked={showEmptyNodes}
                                       onChange={handleShowEmptyNodes}/> empty nodes
                            </label>
                        </span>
                    </fieldset>
                </div>
                {(!versionIsLoading && !versionIsError) && <div className="footnote">Use Perl regular expressions, <Link to={version.implementation.url + 'Manual.html#PerlRegularExpressions'}>see the manual</Link>.</div>}

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
