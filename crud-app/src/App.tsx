// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './Components/Header';
import AddUser from './Screens/AddUser';
import User from './Screens/HomeScreen';
import EditUser from './Screens/EditUser';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import { IconButton } from "@chakra-ui/button";
// import { VStack,Heading,Flex } from "@chakra-ui/layout";
// import {FaSun,FaMoon} from 'react-icons/fa';
const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
      {/* <VStack p={5}>
            <Flex w="15%" h="35%">
            <Heading ml="8" size="md" fontWeight="extrabold" color="cyan.400">
                Crud App
            </Heading>
         </Flex>
         <IconButton icon={<FaSun/>} isRound="true">
               
         </IconButton>
        </VStack> */}

          <Container>
       <Route path="/" component={User} exact/>      
       <Route path="/edituser/:id" component={EditUser} />
       <Route path="/adduser" component={AddUser}  />

</Container> 
          </main>
    </Router>
  )

}

export default App
