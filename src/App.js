import './App.css';
import InventoryComponents from './Components/InventoryComponents'
import ShoesComponents from './Components/ShoesComponents';
import ShirtsComponents from './Components/ShirtsComponents';
import SocksComponents from './Components/SocksComponents'

function App(){
    return(
     <div className="inventorycontainer">
         <h1>Inventory</h1>
            
            
            <InventoryComponents  item= "pants" increment={2}/>
            
            
            <ShoesComponents item= "Tennis Shoes"/>
            

            <ShirtsComponents item= "T-shirts" />

            <SocksComponents item= "Socks"/>
    </div>
    );
}

export default App;

