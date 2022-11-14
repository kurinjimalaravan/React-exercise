// import Birds from './exercise12.js/birds';
import Card from './exercise12.js/birdscard';
import Footer from './exercise12.js/footer';
// import Dates from './exercise3/dates'
// import Day from './exercise3/time'
// import Data from './exercise4/propscontent';
import Toggle from './exercise5/togglebutton'
import './App.css';
// import Calci from './exercise6/Calci'
import Form from './exercise7/form'
import Todo from './exercise9/Todo'
// import Reuse from './exercise8/reuse'
// import Apicomp from './exercise10/apicomp';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Birds /> */}
        <Card />
        {/* <Dates />
        <Day /> */} 
        {/* <Data /> */}
        <Toggle /> 
        <Todo />
        {/* <Calci /> */}
        <Form />
        {/* <Reuse/> */}
        {/* <Apicomp/> */}
        <Footer />
        

      </header>
    </div>
  );
}

export default App;
