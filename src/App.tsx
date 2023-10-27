import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import './styles/_global.scss';

const App = () => {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} setIsScrolling={setIsScrolling} />
      <Main setActiveTab={setActiveTab} isScrolling={isScrolling} />
    </div>
  );
};

export default App;
