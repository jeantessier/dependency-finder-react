import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useVersion } from '../../hooks'
import { CLOSURE_URL, INBOUND, OUTBOUND } from '../../lib'
import { NavBar, Title } from '../../shared'
import './ClosureControls.css'

const ClosureControls = ({ form, handleTextChange, setClosureResults }) => {
    const { version, isLoading: versionIsLoading, isError: versionIsError } = useVersion()

    useEffect(
        () => {
            const submitForm = async () => {
                const request = new Request(CLOSURE_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                })
                const response = await fetch(request)
                setClosureResults(await response.json())
            }

            submitForm()
        },
        [form, setClosureResults],
    )

    return (
        <div className="closure-controls">
            <Title />

            <NavBar />

            <div className="closure-start-controls blue">
                <fieldset>
                    <legend>Start with programming elements</legend>
                    <div className="regex">
                        <label htmlFor="startIncludes">includes:</label>
                        <input name="startIncludes" id="startIncludes"
                               size={40}
                               value={form.startIncludes}
                               onChange={handleTextChange}/>
                        <label htmlFor="startExcludes">excludes:</label>
                        <input name="startExcludes" id="startExcludes"
                               size={40}
                               value={form.startExcludes}
                               onChange={handleTextChange}/>
                    </div>
                </fieldset>
            </div>

            <div className="closure-stop-controls blue">
                <fieldset>
                    <legend>Stop with programming elements</legend>
                    <div className="regex">
                        <label htmlFor="stopIncludes">includes:</label>
                        <input name="stopIncludes" id="stopIncludes"
                               size={40}
                               value={form.stopIncludes}
                               onChange={handleTextChange}/>
                        <label htmlFor="stopExcludes">excludes:</label>
                        <input name="stopExcludes" id="stopExcludes"
                               size={40}
                               value={form.stopExcludes}
                               onChange={handleTextChange}/>
                    </div>
                </fieldset>
            </div>

            <div className="closure-depth-controls blue">
                <fieldset>
                    <span className="depth-control">
                        <label
                            title="Maximum hops against the direction dependencies.  Empty field means no limit."
                            htmlFor="maximumInboundDepth">
                            <input name="maximumInboundDepth" id="maximumInboundDepth"
                                   size={2}
                                   value={form.maximumInboundDepth}
                                   onChange={handleTextChange}/>
                        </label>
                    </span>
                    <span
                        className="depth-control">{INBOUND} follow {OUTBOUND}</span>
                    <span className="depth-control">
                        <label
                            title="Maximum hops in the direction of dependencies.  Empty field means no limit."
                            htmlFor="maximumOutboundDepth">
                            <input name="maximumOutboundDepth" id="maximumOutboundDepth"
                                   size={2}
                                   value={form.maximumOutboundDepth}
                                   onChange={handleTextChange}/>
                        </label>
                    </span>
                </fieldset>
            </div>

            <div className="closure-scope-controls blue">
                <fieldset>
                    <legend>Summarize programming elements</legend>
                    <span>
                        <label htmlFor="packageScope">
                            <input type="radio"
                                   name="scope" id="packageScope"
                                   value="package"
                                   checked={form.scope === 'package'}
                                   onChange={handleTextChange}/> package
                        </label>
                    </span>
                    <span>
                        <label htmlFor="classScope">
                            <input type="radio"
                                   name="scope" id="classScope"
                                   value="class"
                                   checked={form.scope === 'class'}
                                   onChange={handleTextChange}/> class
                        </label>
                    </span>
                    <span>
                        <label htmlFor="featureScope">
                            <input type="radio"
                                   name="scope" id="featureScope"
                                   value="feature"
                                   checked={form.scope === 'feature'}
                                   onChange={handleTextChange}/> feature
                        </label>
                    </span>
                </fieldset>
            </div>

            <div className="closure-filter-controls blue">
                <fieldset>
                    <legend>Summarize dependencies</legend>
                    <span>
                        <label htmlFor="packageFilter">
                            <input type="radio"
                                   name="filter" id="packageFilter"
                                   value="package"
                                   checked={form.filter === 'package'}
                                   onChange={handleTextChange}/> package
                        </label>
                    </span>
                    <span>
                        <label htmlFor="classFilter">
                            <input type="radio"
                                   name="filter" id="classFilter"
                                   value="class"
                                   checked={form.filter === 'class'}
                                   onChange={handleTextChange}/> class
                        </label>
                    </span>
                    <span>
                        <label htmlFor="featureFilter">
                            <input type="radio"
                                   name="filter" id="featureFilter"
                                   value="feature"
                                   checked={form.filter === 'feature'}
                                   onChange={handleTextChange}/> feature
                        </label>
                    </span>
                </fieldset>
            </div>
            {(!versionIsLoading && !versionIsError) && <div className="footnote">Use Perl regular expressions, <Link to={version.implementation.url + 'Manual.html#PerlRegularExpressions'}>see the manual</Link>.</div>}
        </div>
    )
}

ClosureControls.propTypes = {
    form: PropTypes.object.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    setClosureResults: PropTypes.func.isRequired,
}

export default ClosureControls
