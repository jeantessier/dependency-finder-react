import PropTypes from 'prop-types'
import './DependencyResult.css'

function DependencyResult({ direction, toFrom, dependencyResult }) {
    return (
        <div className="dependency-result">
            <div>
                <span>{dependencyResult.total} {direction} link(s)</span>
            </div>
            <div className="dependencies package">
                <span>{dependencyResult.packages} {toFrom} package(s)</span>
                {dependencyResult.packageRatio &&
                    <span> (on average {dependencyResult.packageRatio} per package)</span>
                }
            </div>
            <div className="dependencies class">
                <span>{dependencyResult.classes} {toFrom} class(es)</span>
                {dependencyResult.classRatio &&
                    <span> (on average {dependencyResult.classRatio} per class)</span>
                }
            </div>
            <div className="dependencies feature">
                <span>{dependencyResult.features} {toFrom} feature(s)</span>
                {dependencyResult.featureRatio &&
                    <span> (on average {dependencyResult.featureRatio} per feature)</span>
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
