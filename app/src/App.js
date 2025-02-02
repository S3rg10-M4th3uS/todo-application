import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateOrUpdateTask from "./pages/CreateOrUpdateTask";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/createtask" element={<CreateOrUpdateTask dbMethod="Create"/>}/>
                <Route path="/updatetask" element={<CreateOrUpdateTask dbMethod="Update"/>}/>
            </Routes>
        </Router>
    );
}

export default App