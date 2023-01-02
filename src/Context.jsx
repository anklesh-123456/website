import React, { useContext, useEffect, useReducer } from 'react';
import reducer from "./reducer";

const AppContext = React.createContext();
const API = {
    id: 1,
    name: "ANklesh Doras",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWWftFpkKGq-CZeK4E-l2NzIQgoxjpwkgZA&usqp=CAU",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa!"
    
};

const intialState ={
    name: "",
    image: "",
    services: [],
};


const AppProvider = ({ children }) =>{

const [state, dispatch] = useReducer(reducer, intialState)
const updateHomePage = () =>{
    return dispatch({
       type: "HOME_UPDATE",
       payload:{
        name: "Thapa Technical",
        image: "./Images/hero.svg",
       },
    });
};

const updateAboutPage = () =>{
    return dispatch({
       type: "ABOUT_UPDATE",
       payload:{
        name: "Vinod Thapa",
        image: "./Images/about1.svg",
       },
    });
};

//to get api data
const getServices = async(url) =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type:"GET_SERVICES", payload:data})
    }catch(error){
        console.log(error)
    }

}

// to call the API
useEffect(()=>{
getServices(API);
},[]);


    return (<AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>
    );
};

// Global Custom hooks

const useGlobalContext = () =>{
    return useContext(AppContext);
};

export{AppContext, AppProvider, useGlobalContext};
