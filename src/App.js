import { UserForms } from "./comp/forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./comp/list";

function App() {
   return (
      <div>
         {/* <First/> */}
         {/* <UserForms />
         <List /> */}
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<UserForms />} />
               <Route path='/list' element={<List />} />
            </Routes>
         </BrowserRouter>

      </div>
   );
}

export default App;
