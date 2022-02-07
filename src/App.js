import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <div>
      <div className='flex flex-col justify-between min-h-screen'>
        <Navbar/>
        <main className='container mx-auto px-3 pb-12'>
          main
        </main>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
