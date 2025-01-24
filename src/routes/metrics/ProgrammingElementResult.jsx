import PropTypes from 'prop-types'
import './ProgrammingElementResult.css'

function ProgrammingElementResult({ type, label, programmingElementResult }) {
    return (
        <div className={'programming-element-result ' + type}>
            <span>{programmingElementResult.count} {label}</span>
            <span> ({programmingElementResult.confirmed} confirmed, {(programmingElementResult.ratio * 100).toFixed(1)}%)</span>
            {programmingElementResult.elements &&
                <div className={'programming-elements ' + type}>
                    {programmingElementResult.elements.map(element =>
                        <div key={element.name} className={'programming-element ' + type}>{element.name}</div>
                    )}
                </div>
            }
        </div>
    )
}

ProgrammingElementResult.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    programmingElementResult: PropTypes.object.isRequired,
}

export default ProgrammingElementResult
