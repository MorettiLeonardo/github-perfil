import { useState, useEffect } from "react"

import styles from './ReposList.module.css'

export default function ReposList({ nomeDoUsuario }) {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeDoUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson)
            })
    }, [nomeDoUsuario])

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => {
                    return (
                        <li className={styles.listItem} key={id}>
                            <b className={styles.listItemName}>nome: {name}</b> <br />
                            <b className={styles.listItemLanguage}>linguagem: {language}</b> <br />
                            <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}