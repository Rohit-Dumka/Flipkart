import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <nav >
                <div className="left">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png" className="logo" width="90px" height="90px"/>
                    <div className="textbox">
                        <input type="text" placeholder="Search for Products, Brands and More"/>
                    </div>
                </div>
                <div className="right">
                    <ul>
                    <li className='login'>
                        login
                    </li>
                    <li className='cart'>
                        Cart
                    </li>
                    <li className='seller'>
                        Became a Seller
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header