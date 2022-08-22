import './App.css'
import TestFour from './Components/TestFour'
function App() {
  return (
    <div>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <div className='container '>
          <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-mb-auto text-dark text-decoration-none'>
            <span className='fs-4'>NancyLe Inc.</span>
          </a>
        </div>
      </header>
      
      <main>
        <div className='container-main'>
          <TestFour/>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default App;


