import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="px-16 py-4 bg-[#D1D1D1] font-['Oswald'] font-bold  text-[36px]  italic text-primary  ">
        <nav>
          <ul className="flex justify-between items-center">
            <li>
              <NavLink to="/">PHONEBOOK</NavLink>
            </li>
            <li className="flex gap-4">
              <NavLink to="login">
                <button className="btn btn-sm btn-outline btn-primary">
                  Log in
                </button>
              </NavLink>
              <NavLink to="register">
                <button className="btn btn-sm btn-outline btn-primary">
                  Register
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className=" h-[calc(100vh_-_88px)] bg-[#E5E4E2] px-16 py-16 flex  gap-8 justify-center items-center">
        <img
          className="w-[450px]"
          src="https://images.unsplash.com/photo-1616711248662-666c8aa10308?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="phone"
        />
        <p className="text-primary text-[45px] font-['Oswald'] text-center">
          Welcome to the <span className="italic font-semibold">PHONEBOOK</span>{' '}
          App!
          <br /> Save, delete and filter your contacts in one place.
        </p>
      </div>
    </>
  );
};

export default Home;
