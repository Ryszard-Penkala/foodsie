import styles from './MotivationWrapper.module.scss'

const MotivationWrapper = ({motivation}) => {
        const motivationTitle = {
            90 : 'You are almost there!'
        }
        const motivationContent = {
            90 : 'We picked out for you a set of meals for today to complete your goal!'
        }
    return (
        <p className = { styles.motivationTitle }> { motivationTitle[motivation] } </p>
        <p className = { styles.motivationContent }> { motivationContent[motivation] } </p>
        );
}

export default MotivationWrapper;