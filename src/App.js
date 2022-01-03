import './App.css';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Posts from './components/Posts';



function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Posts />
    </div>
  );
}

export default App;
