const Navbar = () => {
  return (
    <nav className=" flex flex-row justify-center  items-center w-full  h-20 bg-blue-400 px-5 shadow-2xl">
      <ul className="flex space-x-6 text-2xl">
        <li clas>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
