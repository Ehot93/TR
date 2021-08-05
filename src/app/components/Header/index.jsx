import './style.css';
import SideMenu from "../SideMenu";
var temp = true;
function menuTrigger(element) {
    temp = !temp;
    console.log('temp=',temp);
}

const Header = () => {
    return (
        <div className='header'>
            <div className="header__menu" onClick={menuTrigger}>
                <SideMenu trigger={temp}/>
            </div>
        </div>
    )
};

export default Header;