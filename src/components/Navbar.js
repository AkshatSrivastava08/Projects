import { Link } from "react-router-dom";


function Navbar(props){
  console.log(props);
    return (
        <div className="border shadow-xl">
            <nav className="flex justify-between px-8 items-center">
            <Link to={"/"}>
            {" "}
            <h1 className="text-[50px] font-bold cursor-pointer">myCrypto<span className="text-blue-800">Tracker</span></h1>
            </Link>
            <navitems className="flex gap-6 text-[25px] font-bold">
                <Link to={"/top10"}>
                {" "}
                <p className="cursor-pointer hover:text-blue-600 font-semibold">Top10</p>
                </Link>

                <Link to={"/trending"}>
                <p className="cursor-pointer hover:text-blue-600 font-semibold">Trending</p>
                </Link>

                <Link to={"/watchlist"}>
                <p className="cursor-pointer hover:text-blue-600 font-semibold">WatchList</p>
                </Link>
            </navitems>
            </nav>
           
        </div>
    )
};

export default Navbar;