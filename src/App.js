import './App.css';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Posts from './components/Posts';
import Register from './pages/Register';




function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Posts />
      <Register />
    </div>
  );
}

export default App;
