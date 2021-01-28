import styles from "./StandardButton.module.scss"

const StandardButton = ({children}) => {

    return (
        <a href=videoLink>
            <button className= { styles.standardButton } > {children} </button>
        </a>
     );
}

export default StandardButton;