import styles from "./StandardButton.module.scss"

const StandardButton = ({videoLink, children}) => {

    return (
        <a href={videoLink} target="_blank" rel="noreferrer">
            <button className= { styles.standardButton } > {children} </button>
        </a>
     );
}

export default StandardButton;