const App = () => {
  return (
    <div className="w-11/12 mx-auto my-20 sm:bg-green-200 iphone:bg-gray-200 iphone:p-5 thin:bg-black thin:text-white thin:p-5">
      <div className="grid gap-8 tablet:grid-cols-2 tablet:items-center tablet:text-left sm:max-xl:bg-blue-100 sm:max-xl:p-9">
        <div>
          <img className="w-full rounded-lg" src="https://images.pexels.com/photos/2244330/pexels-photo-2244330.jpeg?auto=compress&cs=tinysrgb&w=400" alt="responsive" />
        </div>
        <div>
          <h1 className="mb-2 text-4xl font-medium iphone:text-red-400 thin:text-lg thin:text-gray-500 iphone:text-lg iphone:text-center  sm:text-red-500">headline</h1>
          <p className="iphone:text-blue-400 sm:text-green-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat voluptate placeat? Ipsum beatae minima rerum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
