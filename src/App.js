
import './App.css';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Header } from './Header';
import { News } from './News';
import { PredictLink } from './PredictLink';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <News></News>
      <PredictLink></PredictLink>
      <Footer></Footer>
    </div>
  );
}

export default App;
