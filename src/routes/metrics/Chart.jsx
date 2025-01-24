import PropTypes from 'prop-types'
import './Chart.css'

function Chart({ chart }) {
    return (chart &&
            <div className="chart">
                Chart goes here ...
            </div>
    )
}

Chart.propTypes = {
    chart: PropTypes.object.isRequired
}

export default Chart
