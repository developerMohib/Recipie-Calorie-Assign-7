

const Header = () => {
    return (
        <div>
            {/* ------- */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div tabIndex="0" className="dropdown">
                    <div role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Recipies</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                    </div>
                    <a href='' className="text-xl lg:text-4xl lg:font-semibold no-underline">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Recipies</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" flex ">
                    <div className="form-control md:block lg:block hidden">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="">
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Header;