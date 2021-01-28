import './App.css';
import BottomContentWrapper from './components/BottomContentWrapper/BottomContentWrapper';
import MainContentWrapper from './components/MainContentWrapper/MainContentWrapper';

function App() {
  return (
    <div className="App">
      <h1 className="headerHeader">foodsie.</h1>
      <MainContentWrapper />
      <BottomContentWrapper />
    </div>
  );
}

export default App;
