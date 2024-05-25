const Header = () => {
    return (
        <div className="bg-gray-200 p-4">
            <nav className="flex justify-between items-center">
                <div className="left flex items-center">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png" className="logo" width="90px" height="90px" alt="Flipkart Logo" href='/'/>
                    <div className="textbox ml-10 w-96" >
                        <input type="text" placeholder="Search for Products, Brands and More" className="p-2 border border-gray-400 rounded"/>
                        <button className="bg-yellow-400 text-white px-4 py-2 rounded-md ml-2 hover:bg-yellow-500 transition duration-300">Search</button>
                    </div>
                </div>
                <div className="right">
                    <ul className="flex items-center space-x-4">
                        <li className="login cursor-pointer px-2 py-1 hover:bg-blue-300">Login</li>
                        <li className="cart cursor-pointer px-2 py-1 rounded hover:bg-blue-300">Cart</li>
                        <li className="seller cursor-pointer px-2 py-1 hover:bg-blue-300">Become a Seller</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
