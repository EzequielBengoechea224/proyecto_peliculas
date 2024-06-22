

//Import react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import pages
import LogInSignIn from './pages/LogInSignIn/LogIngSignIn';
import Home from './pages/Home/Home';

import './App.css'
import Header from './components/Header/Header';

//Import firebase
/*import { db } from './firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';*/

function App() {


  /*const [users, setUsers] = useState([]);*/

  /*useEffect(() =>{
    const fetchUsers = async () =>{
      try{
        const querySnapshot = await getDocs(collection(db,"users"));
        const usersList = querySnapshot.docs.map(doc =>({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersList);
      } catch (error){
        console.error("Failed fetching data: ", error)
      }
    };

    fetchUsers();

  },[]);*/

 

  return (
    <Router>
      <div className='App'>
        <Header /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginsignin' element={<LogInSignIn/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
