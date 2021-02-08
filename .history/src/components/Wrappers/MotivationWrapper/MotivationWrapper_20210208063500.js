import styles from './MotivationWrapper.module.scss'

const MotivationWrapper = ({motivation}) => {
        const motivationTitle = {
            90 : 'You are almost there!'
        }
        const motivationContent = {
            90 : 'You are almost there!'
        }
    return (
        <p> { motivationTitle[motivation] } </p>
        );
}

export default MotivationWrapper;