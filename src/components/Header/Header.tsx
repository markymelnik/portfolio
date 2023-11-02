import useHeaderHideOnScroll from '../../hooks/useHeaderHideOnScroll';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import './_header.scss';

type HeaderProps = {
  activeTab: string,
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
}

const Header = ({ activeTab, setActiveTab, setIsScrolling }: HeaderProps) => {

  useHeaderHideOnScroll();
  
  return (
    <header className="header-container">
      <div className="header-top">
        <Logo />
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} setIsScrolling={setIsScrolling} />
      </div>
    </header>
  )
}

export default Header;