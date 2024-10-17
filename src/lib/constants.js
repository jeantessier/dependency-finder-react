const DEFAULT_SERVER_BASE_URL = 'http://localhost:8080'

const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || DEFAULT_SERVER_BASE_URL

export {
    SERVER_BASE_URL,
}
