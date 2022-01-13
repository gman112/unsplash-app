const Navbar = () => {
  return (
    <div className='flex flex-col font-noto'>
      <div className='flex items-center mx-4 my-4 justify-between'>
        <h1 className='capitalize font-bold text-sm'>unsplash</h1>
        <button className='bg-green-600 py-2 px-2 rounded-md text-white text-sm shadow-md'>
          add photo
        </button>
      </div>
      <input
        type='text'
        placeholder='search by name'
        className='mx-6 my-4 rounded-md shadow-md py-4 px-4 placeholder:text-sm focus:outline-none bg-transparent border-2 border-gray-400'
      />
    </div>
  );
};

export default Navbar;
