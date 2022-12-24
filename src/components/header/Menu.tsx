import Item from './items';
import './nav.css';

function Menu({item}:{item:string[]}) {
 const list = item.map(items =>  <Item key={items} item={items} />  )
  return (
       <ul className='menu-ul justify-center'>
        {list}
        </ul>
  );
}

export default Menu;
