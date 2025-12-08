import ReactECharts from 'echarts-for-react'
import PropTypes from 'prop-types'
import './Histogram.css'

const Histogram = ({ title, histogram }) => {
    const chartOptions = {
        title: {
            text: title,
        },
        xAxis: {
            type: 'value',
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                type: 'line',
                smooth: true,
                data: histogram,
            },
        ],
    }

    return (
        histogram.length > 0 &&
            <div className="histogram">
                <ReactECharts option={chartOptions} />
            </div>
    )
}

Histogram.propTypes = {
    title: PropTypes.string.isRequired,
    histogram: PropTypes.array.isRequired,
}

export default Histogram
