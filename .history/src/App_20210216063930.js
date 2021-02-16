import styles from './App.module.scss'
import BottomContentWrapper from './components/Wrappers/BottomContentWrapper/BottomContentWrapper';
import MainContentWrapper from './components/MainContentWrapper/MainContentWrapper';
import SideWrapper from './components/Wrappers/SideWrapper/SideWrapper'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.mainPart}>
        <h1 className={styles.headerHeader}>foodsie.</h1>
        <MainContentWrapper />
        <BottomContentWrapper />
      </div>
      <div className={styles.gradientPanel}>
      </div>
      <SideWrapper className={styles.sideWrapper} />
    </div>
  );
}

export default App;
