const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || document.location.origin

const EXTRACT_URL = SERVER_BASE_URL + "/api/extract"
const LOAD_URL = SERVER_BASE_URL + "/api/load"
const QUERY_URL = SERVER_BASE_URL + "/api/query"
const CLOSURE_URL = SERVER_BASE_URL + "/api/closure"
const CYCLES_URL = SERVER_BASE_URL + "/api/cycles"
const METRICS_URL = SERVER_BASE_URL + "/api/metrics"
const STATS_URL = SERVER_BASE_URL + "/api/stats"
const VERSION_URL = SERVER_BASE_URL + "/api/version"

const INBOUND = '<--'
const OUTBOUND = '-->'
const BIDIRECTIONAL = '<->'

export {
    EXTRACT_URL,
    LOAD_URL,
    QUERY_URL,
    CLOSURE_URL,
    CYCLES_URL,
    METRICS_URL,
    STATS_URL,
    VERSION_URL,

    INBOUND,
    OUTBOUND,
    BIDIRECTIONAL,
}
