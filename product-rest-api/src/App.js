import logo from './logo.svg';
import './App.css';
import DisplayProduct from './DisplayProduct';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <h2>Product Management System Using json-server with axios</h2>
      <AddProduct></AddProduct>
      <hr/>
      <DeleteProduct></DeleteProduct>
      <hr/>
      <UpdateProduct></UpdateProduct>
      <hr/>
      <DisplayProduct></DisplayProduct>
      
      
    </div>
  );
}

export default App;
