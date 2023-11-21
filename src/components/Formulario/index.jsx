import { useState, useEffect } from "react"

export default function Formulario() {
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')

    useEffect(() => {
        console.log("componente montado")

        return (
            console.log("componente desmontado")
        )
    }, [])

    useEffect(() => {
        // console.log("Matéria A mudou")
    }, [materiaA])

    function alteraNome(evento) {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    function renderizaResultado() {
        const media = (materiaA + materiaB + materiaC) / 3

        if (media >= 7) {
            return (
                <p>{nome} passou!</p>
            )
        } else {
            return (
                <p>{nome} reprovou!</p>
            )
        }
    }

    return (
        <form>
            {[1, 2, 3, 4, 5].map(item => {
                return (
                    <li key={item}>{item}</li>
                )
            })}

            <input type="text" placeholder="Digite seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={({ target }) => setMateriaC(parseInt(target.value))} />
            {renderizaResultado()}
        </form>
    )
}