import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useVersion } from '../../hooks'
import { QUERY_URL, INBOUND, OUTBOUND } from '../../lib'
import { NavBar, Title } from '../../shared'
import './QueryControls.css'

const QueryControls = ({ form, handleTextChange, handleFlagChange, setQueryResults }) => {
    const { version, isLoading: versionIsLoading, isError: versionIsError } = useVersion()

    useEffect(
        () => {
            const submitForm = async () => {
                const request = new Request(QUERY_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                })
                const response = await fetch(request)
                setQueryResults(await response.json())
            }

            submitForm()
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [form],
    )

    return (
        <div className="query-controls">
                <Title />

                <NavBar />

                <div className="query-scope-controls blue">
                    <fieldset>
                        <legend>Select programming elements</legend>
                        <span className="scope-control">
                            <label
                                title="Check to include matching package nodes in query results."
                                htmlFor="packageScope">
                                <input type="checkbox"
                                       name="packageScope" id="packageScope"
                                       checked={form.packageScope}
                                       onChange={handleFlagChange}/> packages
                            </label>
                        </span>
                        <span className="scope-control">
                            <label
                                title="Check to include matching class nodes in query results."
                                htmlFor="classScope">
                                <input type="checkbox"
                                       name="classScope" id="classScope"
                                       checked={form.classScope}
                                       onChange={handleFlagChange}/> classes
                            </label>
                        </span>
                        <span className="scope-control">
                            <label
                                title="Check to include matching feature nodes in query results."
                                htmlFor="featureScope">
                                <input type="checkbox"
                                       name="featureScope" id="featureScope"
                                       checked={form.featureScope}
                                       onChange={handleFlagChange}/> features
                            </label>
                        </span>
                        <div className="regex">
                            <label htmlFor="scopeIncludes">includes:</label>
                            <input name="scopeIncludes" id="scopeIncludes"
                                   size={40}
                                   value={form.scopeIncludes}
                                   onChange={handleTextChange}/>
                            <label htmlFor="scopeExcludes">excludes:</label>
                            <input name="scopeExcludes" id="scopeExcludes"
                                   size={40}
                                   value={form.scopeExcludes}
                                   onChange={handleTextChange}/>
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
                                <input type="checkbox"
                                       name="packageFilter" id="packageFilter"
                                       checked={form.packageFilter}
                                       onChange={handleFlagChange}/> packages
                            </label>
                        </span>
                        <span className="filter-control">
                            <label
                                title="Check to include matching class nodes in query results."
                                htmlFor="classFilter">
                                <input type="checkbox"
                                       name="classFilter" id="classFilter"
                                       checked={form.classFilter}
                                       onChange={handleFlagChange}/> classes
                            </label>
                        </span>
                        <span className="filter-control">
                            <label
                                title="Check to include matching feature nodes in query results."
                                htmlFor="featureFilter">
                                <input type="checkbox"
                                       name="featureFilter" id="featureFilter"
                                       checked={form.featureFilter}
                                       onChange={handleFlagChange}/> features
                            </label>
                        </span>
                        <div className="regex">
                            <label htmlFor="filterIncludes">includes:</label>
                            <input name="filterIncludes" id="filterIncludes"
                                   size={40}
                                   value={form.filterIncludes}
                                   onChange={handleTextChange}/>
                            <label htmlFor="filterExcludes">excludes:</label>
                            <input name="filterExcludes" id="filterExcludes"
                                   size={40}
                                   value={form.filterExcludes}
                                   onChange={handleTextChange}/>
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
                                <input type="checkbox"
                                       name="showInbounds" id="showInbounds"
                                       checked={form.showInbounds}
                                       onChange={handleFlagChange}/> {INBOUND}
                            </label>
                        </span>
                        <span className="show-control">
                            <label
                                title="Check to include matching package nodes in query results."
                                htmlFor="showOutbounds">
                                <input type="checkbox"
                                       name="showOutbounds" id="showOutbounds"
                                       checked={form.showOutbounds}
                                       onChange={handleFlagChange}/> {OUTBOUND}
                            </label>
                        </span>
                        <span className="show-control">
                            <label
                                title="Check to include matching package nodes in query results."
                                htmlFor="showEmptyNodes">
                                <input type="checkbox"
                                       name="showEmptyNodes" id="showEmptyNodes"
                                       checked={form.showEmptyNodes}
                                       onChange={handleFlagChange}/> empty nodes
                            </label>
                        </span>
                    </fieldset>
                </div>
                {(!versionIsLoading && !versionIsError) && <div className="footnote">Use Perl regular expressions, <Link to={version.implementation.url + 'Manual.html#PerlRegularExpressions'}>see the manual</Link>.</div>}
        </div>
    )
}

QueryControls.propTypes = {
    form: PropTypes.object.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    handleFlagChange: PropTypes.func.isRequired,
    setQueryResults: PropTypes.func.isRequired,
}

export default QueryControls
