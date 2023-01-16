/* eslint-disable react/style-prop-object */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Home />,
  },
];

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <div className={styles.router}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
