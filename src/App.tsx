import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Main from "./components/Main/Main";
import ScrollToTop from "./hooks/useScrollToTop";
import Sidebar from "./components/Header/Header";
import "./styles/_global.scss";

const App = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsScrolling={setIsScrolling}
        />
        <Main setActiveTab={setActiveTab} isScrolling={isScrolling} />
      </div>
    </Router>
  );
};

export default App;
