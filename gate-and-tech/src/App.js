import './App.css';

function App() {
  return (
    <div className='bg-sky-300 h-auto w-full'>
      <div >
        <h1 className='font-bold text-6xl text-center mt-40 text-gray-500'>Quetions</h1>
      </div>

      <div className='flex justify-end mr-40'>
        <button className='inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>--Select--</button>
      </div>

      <div className="max-w-xs bg-white rounded-lg shadow-md p-4 absolute left-0 m-4">
      {/* Text Section */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Ingredients</h2>
      
      {/* Image Section */}
      <img
        className="w-full h-32 object-cover rounded-md mb-4"
        src="https://via.placeholder.com/150"  // Replace with your image URL
        alt="Ingredients"
      />

      {/* Progress Bar Section */}
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-right mt-2 text-sm text-gray-600">
        10 out of 100 completed (10%)
      </div>
    </div>





    </div>
  );
}

export default App;
