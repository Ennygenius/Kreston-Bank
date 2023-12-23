import React from "react";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("clicked");
  };
  return (
    <div>
      {" "}
      {nav ? (
        <div className="sideNav bg-overlay w-[30%] px-10 pt-2 flex-1 md:hidden ">
          <ul className="text-center">
            <li className="my-10 py-10 ">
              <AiFillBank fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/dashboard"}>
                  Home
                </Link>
              </small>
            </li>
            <li className="my-10 py-10">
              <AiFillAppstore fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/withdraw"}>
                  Transfer
                </Link>
              </small>
            </li>
            <li className="my-10 py-10">
              <AiFillHighlight fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/withdraw"}>
                  Withdraw
                </Link>
              </small>
            </li>
            <li className="my-10 py-10">
              <AiFillWallet fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/dashboard"}>
                  Request Loan
                </Link>
              </small>
            </li>
            <li className="my-10 py-10">
              <RiLuggageDepositFill fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/dashboard"}>
                  Deposit
                </Link>
              </small>
            </li>
            <li className="my-10 py-10">
              <FaHotel fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/dashboard"}>
                  Reports
                </Link>
              </small>
            </li>

            <li className="my-10 py-10">
              <AiFillCalculator fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/dashboard"}>
                  Loan
                </Link>
              </small>
            </li>
          </ul>
          <ul className="text-center">
            <li className="my-10 py-10">
              <AiFillProfile fontSize={30} color="#CAFF33" />
              <small>
                <Link className="font-bold" to={"/profile"}>
                  Profile
                </Link>
              </small>
            </li>
            <li className="my-10 " onClick={HandleLogout}>
              <BiLogOutCircle fontSize={30} color="#CAFF33" />
              <small>Logout</small>
            </li>
          </ul>
        </div>
      ) : null}
      {!user.isAdmin && (
        <div className="sideNav bg-overlay w-[20%] md:h-[100vh] pt-2 flex-1 md:block hidden">
          <ul className="text-center">
            <Link to={"/dashboard"}>
              <li className="my-10 py-2 flex items-center justify-center">
                <AiFillBank fontSize={25} color="#CAFF33" />
                <span className="pl-2"> Home</span>
              </li>
            </Link>
            <Link to={"/transfer"}>
              <li className="my-10 py-2 flex items-center justify-center">
                <AiFillAppstore fontSize={25} color="#CAFF33" />
                <span className="pl-2">Transfer</span>
              </li>
            </Link>
            <Link to={"/withdraw"}>
              <li className="my-10 py-2 flex items-center justify-center">
                <AiFillHighlight fontSize={25} color="#CAFF33" />
                <span className="pl-2"> Withdraw </span>
              </li>
            </Link>
            <li className="my-10 py-2 flex items-center justify-center">
              <AiFillWallet fontSize={30} color="#CAFF33" />
              <span className="pl-2"> Request Loan</span>
            </li>
            <li className="my-10 py-2 flex items-center justify-center">
              {" "}
              <RiLuggageDepositFill fontSize={30} color="#CAFF33" />
              <span className="pl-2"> Deposit </span>
            </li>
            <li className="my-10 py-2 flex items-center justify-center">
              <AiFillCalculator fontSize={30} color="#CAFF33" />
              <span className="pl-2"> Reports</span>
            </li>{" "}
            <li className="my-10 py-2 flex items-center justify-center">
              <FaHotel fontSize={30} color="#CAFF33" />
              <span className="pl-2">Loans</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
