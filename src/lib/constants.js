const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || import.meta.env.BASE_URL
const EXTRACT_URL = SERVER_BASE_URL + "/extract"
const LOAD_URL = SERVER_BASE_URL + "/load"
const QUERY_URL = SERVER_BASE_URL + "/query"
const STATS_URL = SERVER_BASE_URL + "/stats"
const VERSION_URL = SERVER_BASE_URL + "/version"

const INBOUND = '<--'
const OUTBOUND = '-->'
const BIDIRECTIONAL = '<->'

export {
    SERVER_BASE_URL,
    EXTRACT_URL,
    LOAD_URL,
    QUERY_URL,
    STATS_URL,
    VERSION_URL,

    INBOUND,
    OUTBOUND,
    BIDIRECTIONAL,
}
