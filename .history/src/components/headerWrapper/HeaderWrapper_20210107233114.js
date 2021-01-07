import styles from "./HeaderWrapper.module.scss";
import HeaderWrapperButton from "./HeaderWrapperButton";

const HeaderWrapper = () => {
    return (
        <>
            <h1 className={styles.wrapper}> HeaderWrapper </h1>
            <HeaderWrapperButton> Popular </HeaderWrapperButton>
            <HeaderWrapperButton> Suggested </HeaderWrapperButton>
            <HeaderWrapperButton> Extreme </HeaderWrapperButton>
            <h1 className= { styles.wrapper} > headerWrapperBottom</h1>
        </>
     );
}

export default HeaderWrapper;