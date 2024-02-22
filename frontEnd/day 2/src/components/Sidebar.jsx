import '../assets/css/sidebar.css';


function Sidebar(flag) {
  const toggleSidebar = () =>{
  }
  return(
    <div className='SBar'>
     
    <div id='scontainer' className='Scontainer'>
      <div id='bar'>
        <ul className='sblist'>
        {/* <div className='toggle-bttn2' id='toggle-bttn2'onClick={toggleSidebar}>Close</div> */}
          <li className='sbitem'>Menu Item 1</li>
          <li className='sbitem'>Menu Item 2</li>
          <li className='sbitem'>Menu Item 3</li>
        </ul>
      </div>
      <div className='stransparency' onClick={toggleSidebar}></div>
    </div>
    </div>
  );
}

export default Sidebar;
