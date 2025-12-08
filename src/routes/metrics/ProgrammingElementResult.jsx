import PropTypes from 'prop-types'
import { Name } from '../../shared'
import './ProgrammingElementResult.css'

const ProgrammingElementResult = ({ type, label, programmingElementResult, onNameClick }) => {
    return (
        <div className={'programming-element-result ' + type}>
            <span>{programmingElementResult.count} {label}</span>
            <span> ({programmingElementResult.confirmed} confirmed, {(programmingElementResult.ratio * 100).toFixed(1)}%)</span>
            {programmingElementResult.elements &&
                <div className={'programming-elements ' + type}>
                    {programmingElementResult.elements.map(element =>
                        <div key={element.name} className={'programming-element ' + type}><Name name={element.name} onNameClick={onNameClick} /></div>
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
    onNameClick: PropTypes.func.isRequired,
}

export default ProgrammingElementResult
