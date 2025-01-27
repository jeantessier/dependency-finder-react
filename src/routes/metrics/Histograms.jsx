import PropTypes from 'prop-types'
import Histogram from './Histogram'
import './Histograms.css'

function Histograms({ histograms }) {
    return (
        histograms &&
            <div className="histograms">
                <Histogram title="Classes per Package" histogram={histograms.classesPerPackage} />
                <Histogram title="Features per Class" histogram={histograms.featuresPerClass} />
                <Histogram title="Inbounds per Package" histogram={histograms.inboundsPerPackage} />
                <Histogram title="Outbounds per Package" histogram={histograms.outboundsPerPackage} />
                <Histogram title="Inbounds per Class" histogram={histograms.inboundsPerClass} />
                <Histogram title="Outbounds per Class" histogram={histograms.outboundsPerClass} />
                <Histogram title="Inbounds per Feature" histogram={histograms.inboundsPerFeature} />
                <Histogram title="Outbounds per Feature" histogram={histograms.outboundsPerFeature} />
            </div>
    )
}

Histograms.propTypes = {
    histograms: PropTypes.object.isRequired,
}

export default Histograms
