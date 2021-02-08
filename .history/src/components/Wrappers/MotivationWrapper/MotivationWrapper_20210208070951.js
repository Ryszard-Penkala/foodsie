import styles from './MotivationWrapper.module.scss'

const MotivationWrapper = ({motivation}) => {
        const motivationTitle = {
            90 : 'You are almost there!'
        }
        const motivationContent = {
            90 : 'We picked out for you a set of meals for today to complete your goal!'
        }
    return (
        <div className={ styles.motivationWrapper }>
            <p className={ styles.motivationTitle }> { motivationTitle[motivation] } </p>
            <p className={ styles.motivationContent }> { motivationContent[motivation] } </p>
            <i className={[fas, fa-arrow-right, fa-2x].join(' ')}></i>
        </div>
        );
}

export default MotivationWrapper;