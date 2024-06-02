import React, { useEffect } from 'react';
import './App.css';
import Home from './components/mainPage/Home';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Header from "./components/header/Header";
import Slider from './components/mainPage/Slider';
import ContactUs from './components/ContactUs';
import MServices from './components/services/MServices';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog'; 
import AdminList from './components/admin/AdminList';
import AdminForm from './components/admin/AdminForm';
import Bagimlilik from './components/services/Bagimlilik';
import GidaSilme from './components/services/GidaSilme';
import IstahKap from './components/services/IstahKap';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Slider />
            <Home />
          </Route>
          <Route path="/admins" component={AdminList} />
          <Route path="/create-admin" component={AdminForm} />
          <Route path="/hakkimizda" exact component={AboutPage} />
          <Route path="/hizmetlerimiz" exact component={MServices} />
          <Route path="/iletisim" exact component={ContactUs} />
          <Route path="/Blog" exact render={() => <Blog customHeader="Bizden Görüntüler" />} />
          <Route path="/hizmetlerimiz/gida-silme" exact  render={() => <GidaSilme header="Gıda Silme" />} />
          <Route path="/hizmetlerimiz/istah-kapama" exact  render={() => <IstahKap header="İştah Kapama" />} />
          <Route path="/hizmetlerimiz/bagimlilik-terapisi" exact render={() => <Bagimlilik header="Bağımlılık Terapisi" />} />
        </Switch>
      </Router>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
