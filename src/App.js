import './App.css';
import Home from './pages/HomeComponent/Home';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 page-full px-0">
          <Home />
        </div>
        <div className="end col-12">
          <p className="mt-3">Made all the way through with react!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
