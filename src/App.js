import Homescreen from './Screen/Homescreen'
import Nav from '../src/Component/Nav'
import Cart from './Component/Cart';
function App() {
  return (
    <div className="App">
        <Nav />
        <Cart />
        <Homescreen />
    </div>
  );
}

export default App;
