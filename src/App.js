import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Content_Components/Profile';

const App = () => {
  return (
    <div className='app_container'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;

