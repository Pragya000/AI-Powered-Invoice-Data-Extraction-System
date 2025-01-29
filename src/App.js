
import './App.css';
import FileUpload from "./Comps/FileUpload";
import Content from "./Comps/Content";
import Navbar from "./Comps/Navbar";
import Footer from "./Comps/Footer";

function App() {
  return (
    <div className="App " >
      <Content></Content>
      <div className="">
      <FileUpload/>
      </div>
      <Navbar></Navbar>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
