import styles from './Perfil.module.css'

const Perfil = ( {nomeDoUsuario} ) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeDoUsuario}.png`} alt="Avatar user" />
            <h1 className={styles.name}>{nomeDoUsuario}</h1>
        </header>
    )
}

export default Perfil