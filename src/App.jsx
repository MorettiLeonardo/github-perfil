import { useState } from "react"

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"

function App() {
  const [username, setUsername] = useState('')

  return (
    <>
      {username.length > 4 ?
        <div >
          <Perfil nomeDoUsuario={username} />
          <ReposList nomeDoUsuario={username} />
        </div > :
        
        <div className="pesquisa">
          <h1>Digite o nome de usuario do github</h1>
          <input type="text" onBlur={e => setUsername(e.target.value)} />
        </div>
      }
    </>
  )
}

export default App
