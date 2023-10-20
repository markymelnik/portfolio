import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import './styles/_global.scss';

const App = () => {
  return (
    <div className="site-container">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
