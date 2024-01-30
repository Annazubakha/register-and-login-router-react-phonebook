const Home = () => {
  return (
    <div className=" h-[calc(100vh_-_80px)]  bg-base-300  px-16 py-16 flex  gap-8 justify-center items-center">
      <img
        className="w-[350px]"
        src="https://images.unsplash.com/photo-1616711248662-666c8aa10308?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="phone"
      />
      <p className="text-primary text-[45px] font-['Oswald'] text-center">
        Welcome to the <span className="italic font-semibold">PHONEBOOK</span>{' '}
        App!
        <br /> Save, delete and filter your contacts in one place.
      </p>
    </div>
  );
};

export default Home;
