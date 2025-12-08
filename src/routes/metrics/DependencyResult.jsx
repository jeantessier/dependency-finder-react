import PropTypes from 'prop-types'
import './DependencyResult.css'

const DependencyResult = ({ direction, toFrom, dependencyResult }) => {
    return (
        <div className="dependency-result">
            <div>
                <span>{dependencyResult.total} {direction} link(s)</span>
            </div>
            <div className="dependencies package">
                <span>{dependencyResult.packages} {toFrom} package(s)</span>
                {dependencyResult.packageRatio !== null &&
                    <span> (on average {(dependencyResult.packageRatio).toFixed(2)} per package)</span>
                }
            </div>
            <div className="dependencies class">
                <span>{dependencyResult.classes} {toFrom} class(es)</span>
                {dependencyResult.classRatio !== null &&
                    <span> (on average {(dependencyResult.classRatio).toFixed(2)} per class)</span>
                }
            </div>
            <div className="dependencies feature">
                <span>{dependencyResult.features} {toFrom} feature(s)</span>
                {dependencyResult.featureRatio !== null &&
                    <span> (on average {(dependencyResult.featureRatio).toFixed(2)} per feature)</span>
                }
            </div>
        </div>
    )
}

DependencyResult.propTypes = {
    direction: PropTypes.string.isRequired,
    toFrom: PropTypes.string.isRequired,
    dependencyResult: PropTypes.object.isRequired,
}

export default DependencyResult
