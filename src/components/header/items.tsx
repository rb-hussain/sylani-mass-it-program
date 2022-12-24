import './nav.css';

function Item({item}:{item:string}) {
  return (
       <li className='pr-8 cursor-pointer'>
        {item}
        </li>
  );
}

export default Item;
