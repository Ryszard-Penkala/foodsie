import styles from './App.module.scss'
import BottomContentWrapper from './components/BottomContentWrapper/BottomContentWrapper';
import MainContentWrapper from './components/MainContentWrapper/MainContentWrapper';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.mainPart}>
        <h1 className={styles.headerHeader}>foodsie.</h1>
        <MainContentWrapper />
        <BottomContentWrapper />
      </div>
      <div className={styles.gradientPanel}></div>
      <div className={styles.sidePanel}></div>
    </div>
  );
}

export default App;
