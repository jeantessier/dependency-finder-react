import reactLogo from './assets/react.svg'
import dependencyFinderLogo from '/dependency_finder_logo.png'
import viteLogo from '/vite.svg'
import { useTitle } from './hooks'
import { NavBar, Title } from './shared'
import './App.css'

const App = () => {
  useTitle('Dependency Finder')

  return (
      <>
          <div><img src={dependencyFinderLogo} alt="Dependency Finder logo"/></div>

          <Title/>
          <NavBar/>

          <p>built with</p>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
