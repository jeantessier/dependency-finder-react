import PropTypes from 'prop-types'
import './Histogram.css'

function Histogram({ title, histogram }) {
    return (
        <div className="histogram">
            Histogram <b>{title}</b> goes here...
        </div>
    )
}

Histogram.propTypes = {
    title: PropTypes.string.isRequired,
    histogram: PropTypes.array.isRequired,
}

export default Histogram
