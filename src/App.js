
import './App.css';
import Employee from './Components/Employee';
// import Counter from './Components/Counter';

const EmployeeInfo = [
  {
    firstName: "Henry",
    lastName: "Smith",
    age: '21',
  },
  {
    firstName: "Shemilore",
    lastName: "Nmeregini",
    age: '21',
  },
  {
    firstName: "John",
    lastName: "Ace",
    age: '24',
  },
  {
    firstName: "Anthony",
    lastName: "Hazard",
    age: '28',
  },
  {
    firstName: "Eden",
    lastName: "Bethel",
    age: '31',
  },
]
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      
        <h2>Company Directory</h2>
        {EmployeeInfo.map(employee => {
          const {firstName, lastName, age} = employee;
          return (
            <Employee firstName={firstName} lastName={lastName} age={age} />
          )
        })}
        {/* <Employee  /> */}
       
      </header>
    </div>
  );
}

export default App;
