import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";
import { StoreType } from "./redux/store";


type PropsType = {

}


const App: React.FC<PropsType> = (props: PropsType) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/Dia logs"} render={() => <DialogsContainer />}/> 
          <Route path={"/Profile"} render={() => <Profile /> }/> 
          <Route path={"/Users"} render={() => <UsersContainer /> }/> 
        </div>
      </div>
  );
};



export default App;
