import styles from "./HeaderWrapper.module.scss";
import HeaderWrapperItem from "./HeaderWrapperItem";

const HeaderWrapper = () => {
    return (
        <>
            <h1 className={styles.wrapper}> HeaderWrapper </h1>
            <HeaderWrapperItem> Popular </HeaderWrapperItem>
            <HeaderWrapperItem />
            <HeaderWrapperItem />
        </>
     );
}

export default HeaderWrapper;