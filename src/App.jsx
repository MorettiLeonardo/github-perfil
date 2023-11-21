import { useState } from "react"

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"

function App() {  
  const [username, setUsername] = useState('')

  return (
    <>
      <input type="text" onBlur={e => setUsername(e.target.value)} />
      {username.length > 4 && (
        <div>
          <Perfil nomeDoUsuario={username} />

          <ReposList nomeDoUsuario={username} />
        </div>
      )}
    </>
  )
}

export default App
