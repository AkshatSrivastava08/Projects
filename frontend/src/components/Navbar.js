import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";


function Navbar(props){
//   console.log(props);

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }
    return (
        <div className=" border shadow-xl">
            <div className=" flex justify-between px-8 items-center">
            <Link to={"/"}>
            {" "}
            <h1 className="text-[50px] font-bold cursor-pointer">myCrypto<span className="text-indigo-500">Tracker</span></h1>
            </Link>

            {user === "logged in" && (
            <navitems className="flex gap-6 text-[25px] font-bold">
                <Link to={"/top10"}>
                {" "}
                <p className="cursor-pointer hover:text-indigo-400 font-semibold">Top10</p>
                </Link>

                <Link to={"/trending"}>
                <p className="cursor-pointer hover:text-indigo-400 font-semibold">Trending</p>
                </Link>

                <Link to={"/watchlist"}>
                <p className="cursor-pointer hover:text-indigo-400 font-semibold">WatchList</p>
                </Link>
            </navitems>
        )}

                <div className="flex gap-4">
                {user === "logged in" ? (
                    <button
                    onClick={handleClick}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg"
                    >
                    Logout
                    </button>
                ) : (
                    <>
                    <Link to={"/login"}>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg">
                        Login
                        </button>
                    </Link>
                    <Link to={"/signin"}>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg">
                        SignUp
                        </button>{" "}
                    </Link>
                    </>
                )}
                </div>
            </div>
        </div>
    )
};

export default Navbar;