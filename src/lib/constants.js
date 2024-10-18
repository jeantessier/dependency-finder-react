const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || import.meta.env.BASE_URL
const EXTRACT_URL = SERVER_BASE_URL + "/extract"
const LOAD_URL = SERVER_BASE_URL + "/load"
const STATS_URL = SERVER_BASE_URL + "/stats"

export {
    SERVER_BASE_URL,
    EXTRACT_URL,
    LOAD_URL,
    STATS_URL,
}
