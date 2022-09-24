import './App.css';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

function App() {

  return (
    <>
    <div className="App">
      <div className='heading  min-h-[6vh] w-full flex justify-center items-center'>
        <h2 className='text-white text-[30px]'>Demonstration of CSS FlexBox Assignment By <span className='font-bold'>Ananth</span></h2>
      </div>

      {/*Example:1 - Flex Direction as Row*/}
      <Example1/>
      <hr className='my-[10rem]'/>

      {/*Example:2 - Flex Direction As Column*/}
      <Example2 />
      <hr className='my-[10rem]'/>
      
      {/*Example:3 - Flex Wrap*/}
      <Example3 />
    </div>
    </>
  );
}

export default App;
