import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Category from './Category';

function App() {
  const sampleImageSrcs = [
    'Image 1',
    'Image 2',
    'Image 3',
    'Image 4',
    'Image 5',
    'Image 5',
  ];
  return (
    <Router>
    <div className="App">
      <div className="App-body">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/architecture' element={<Category name={"Architecture"} images={sampleImageSrcs} cover={"../static/images/architecture.jpg"}/>}/>
          <Route path='/healthcare' element={<Category name={"Healthcare"} images={sampleImageSrcs} cover={"../static/images/healthcare.jpg"}/>}/>
          <Route path='/commercial' element={<Category name={"Commercial"} images={sampleImageSrcs} cover={"../static/images/commercial.jpg"}/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
