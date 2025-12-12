import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Link } from 'react-router'
import { useVersion } from '../../hooks'
import { METRICS_URL } from '../../lib'
import { NavBar, Title } from '../../shared'
import './MetricsControls.css'

const MetricsControls = ({ form, handleTextChange, handleFlagChange, setMetricsResults }) => {
    const { version, isLoading: versionIsLoading, isError: versionIsError } = useVersion()


    useEffect(
        () => {
            const submitForm = async () => {
                const request = new Request(METRICS_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                })
                const response = await fetch(request)
                setMetricsResults(await response.json())
            }

            submitForm()
        },
        [form, setMetricsResults],
    )

    return (
        <div className="metrics-controls">
            <Title />

            <NavBar />

            <div className="metrics-scope-controls blue">
                <fieldset>
                    <legend>Select programming elements</legend>
                    <span className="scope-control">
                        <label
                            title="Check to include matching package nodes in metrics results."
                            htmlFor="packageScope">
                            <input type="checkbox"
                                   name="packageScope" id="packageScope"
                                   checked={form.packageScope}
                                   onChange={handleFlagChange}/> packages
                        </label>
                    </span>
                    <span className="scope-control">
                        <label
                            title="Check to include matching class nodes in metrics results."
                            htmlFor="classScope">
                            <input type="checkbox"
                                   name="classScope" id="classScope"
                                   checked={form.classScope}
                                   onChange={handleFlagChange}/> classes
                        </label>
                    </span>
                    <span className="scope-control">
                        <label
                            title="Check to include matching feature nodes in metrics results."
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

            <div className="metrics-filter-controls blue">
                <fieldset>
                    <legend>Show dependencies</legend>
                    <span className="filter-control">
                        <label
                            title="Check to include matching package nodes in metrics results."
                            htmlFor="packageFilter">
                            <input type="checkbox"
                                   name="packageFilter" id="packageFilter"
                                   checked={form.packageFilter}
                                   onChange={handleFlagChange}/> packages
                        </label>
                    </span>
                    <span className="filter-control">
                        <label
                            title="Check to include matching class nodes in metrics results."
                            htmlFor="classFilter">
                            <input type="checkbox"
                                   name="classFilter" id="classFilter"
                                   checked={form.classFilter}
                                   onChange={handleFlagChange}/> classes
                        </label>
                    </span>
                    <span className="filter-control">
                        <label
                            title="Check to include matching feature nodes in metrics results."
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
                               defaultValue={form.filterIncludes}
                               onChange={handleTextChange}/>
                        <label htmlFor="filterExcludes">excludes:</label>
                        <input name="filterExcludes" id="filterExcludes"
                               size={40}
                               defaultValue={form.filterExcludes}
                               onChange={handleTextChange}/>
                    </div>
                </fieldset>
            </div>

            <div className="show-controls blue">
                <fieldset>
                    <span className="show-control">
                        <label
                            title="Check to list programming elements in metrics results."
                            htmlFor="listElements">
                            <input type="checkbox"
                                   name="listElements" id="listElements"
                                   checked={form.listElements}
                                   onChange={handleFlagChange}/> List programming elements
                        </label>
                    </span>
                    <span className="show-control">
                        <label
                            title="Check to include chart."
                            htmlFor="chart">
                            <input type="checkbox"
                                   name="chart" id="chart"
                                   checked={form.chart}
                                   onChange={handleFlagChange}/> Chart
                        </label>
                    </span>
                    <span className="show-control">
                        <label
                            title="Check to include histograms."
                            htmlFor="histograms">
                            <input type="checkbox"
                                   name="histograms" id="histograms"
                                   checked={form.histograms}
                                   onChange={handleFlagChange}/> Histograms
                        </label>
                    </span>
                </fieldset>
            </div>
            {(!versionIsLoading && !versionIsError) && <div className="footnote">Use Perl regular expressions, <Link to={version.implementation.url + 'Manual.html#PerlRegularExpressions'}>see the manual</Link>.</div>}
        </div>
    )
}

MetricsControls.propTypes = {
    form: PropTypes.object.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    handleFlagChange: PropTypes.func.isRequired,
    setMetricsResults: PropTypes.func.isRequired,
}

export default MetricsControls
