import Logo from './Logo';
import Menu from './Menu';
import './nav.css';
import Announcement from '../buttons/Announcement';

function Navbar() {
  const announcementData = "Announcement";
  const items = ["Home","Service","About","Media","News","Contact Us"]; 
  return (
    <header>
      <div className='container-fluid flex justify-center	'>
        <div className="container my-4">
          <div className="row flex items-center  ">
            <div className="columns-2xs	">
              <Logo/>
            </div>
                <div className="columns-7xl">
                <Menu  item={items} />
                </div>
            <div className="columns-2xs flex">
                <Announcement btnText={announcementData} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
