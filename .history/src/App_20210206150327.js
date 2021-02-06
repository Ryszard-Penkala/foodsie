import styles from './App.module.scss'
import './App.css';
import BottomContentWrapper from './components/BottomContentWrapper/BottomContentWrapper';
import MainContentWrapper from './components/MainContentWrapper/MainContentWrapper';

function App() {
  return (
    <div className="App">
      <div className="mainPart">
        <h1 className="headerHeader">foodsie.</h1>
        <MainContentWrapper />
        <BottomContentWrapper />
      </div>
      <div className="gradientPanel"></div>
    </div>
  );
}

export default App;
