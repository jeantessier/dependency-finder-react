export const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || document.location.origin

export const EXTRACT_URL = SERVER_BASE_URL + "/api/extract"
export const LOAD_URL = SERVER_BASE_URL + "/api/load"
export const QUERY_URL = SERVER_BASE_URL + "/api/query"
export const CLOSURE_URL = SERVER_BASE_URL + "/api/closure"
export const CYCLES_URL = SERVER_BASE_URL + "/api/cycles"
export const METRICS_URL = SERVER_BASE_URL + "/api/metrics"
export const STATS_URL = SERVER_BASE_URL + "/api/stats"
export const VERSION_URL = SERVER_BASE_URL + "/api/version"

export const INBOUND = '<--'
export const OUTBOUND = '-->'
export const BIDIRECTIONAL = '<->'
