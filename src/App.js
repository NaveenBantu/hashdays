import Days from './components/Days'

function App() {
  return (
    <>
      <header className='px-4 flex justify-between items-center bg-gray-200'>
        <h1 className='text-teal-600 text-2xl font-bold'># Dayz</h1>
        <button className='bg-teal-600 text-gray-50 px-4 py-2 m-2 rounded-md hover:bg-teal-500'>
          Login
        </button>
      </header>
      <div>
        <Days inpDays={50} />
      </div>
    </>
  );
}

export default App;
