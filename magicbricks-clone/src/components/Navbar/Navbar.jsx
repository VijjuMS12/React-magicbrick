import "./Navbar.css"

function Navbar() {
  return (
    <>
      <header>
        {/* Top Red Bar */}
        <div className="top-bar">
          <div className="left">
            <span className="logo">Happy Makar Sankranti</span>
            <select className="city" name="city" id="">
              <option value="Bangalore">Bangalore</option>
              <option value="Bangalore">Mangalore</option>
            </select>
          </div>

          <div className="right">
            <select className="users" name="users" id="">
              <option value="Mb-prime">Mbprime</option>
              <option value="Bangalore">Mangalore</option>
            </select>
            <select className="cred" name="users" id="">
              <option value="login">Login</option>
              <option value="Sign-up">Sign_up</option>
            </select>
            <button className="post-btn">Post Property <small>FREE</small></button>
          </div>
        </div>
        <nav className="menu-bar">
          <ul>
            <li>Buy </li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Home Loans</li>
            <li>Home Interiors</li>
            <li>
              MB Advice <span className="new">NEW</span>
            </li>
            <li>Help </li>
          </ul>
        </nav>
      </header>


    </>
  );
}

export default Navbar;