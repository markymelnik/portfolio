import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import './styles/_global.scss';

const App = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <div className="site-container">
      <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
      <Main activeTab={activeTab} />
    </div>
  );
};

export default App;
