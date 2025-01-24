import PropTypes from 'prop-types'
import ReactECharts from 'echarts-for-react'
import './Chart.css'

function Chart({ chart }) {
    if (!chart) {
        return (
            <></>
        )
    }

    // Chart's first row is headers for the various series.
    // We skip it when building series by calling ''chart.slice(1)''.

    const xAxisData = chart.slice(1).map(point => point[0])

    // Chart's first column is the x-value.
    // When we build ''series'' below, it has an entry for each
    // column.  We skip the first column with ''.slice(1)'' and
    // then we filter out empty series (all zeroes).

    const series = chart[0].map((name, i) => {
        return {
            name,
            type: 'line',
            smooth: true,
            data: chart.slice(1).map(point => point[i]),
        }
    }).slice(1).filter(series => series.data.find(point => point[1] !== 0))

    const chartOptions = {
        title: {
            text: 'Metrics',
        },
        legend: {
            type: 'plain',
            orient: 'vertical',
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
        series,
    }

    return (chart &&
            <div className="chart">
                <ReactECharts option={chartOptions} />
            </div>
    )
}

Chart.propTypes = {
    chart: PropTypes.object.isRequired
}

export default Chart
