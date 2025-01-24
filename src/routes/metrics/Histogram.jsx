import PropTypes from 'prop-types'
import './Histogram.css'
import ReactECharts from "echarts-for-react";

function Histogram({ title, histogram }) {
    if (!histogram || histogram.length === 0) {
        return (
            <></>
        )
    }

    const xAxisData = histogram.map(point => point[0])
    const seriesData = histogram.map(point => point[1])

    const chartOptions = {
        title: {
            text: title,
        },
        xAxis: {
            data: xAxisData,
            name: 'cardinality',
            nameLocation: 'middle',
            nameGap: 25,
        },
        yAxis: {
            name: 'size',
            nameLocation: 'middle',
            nameGap: 25,
        },
        series: [
            {
                type: 'line',
                smooth: true,
                data: seriesData,
            },
        ],
    }

    return (
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
