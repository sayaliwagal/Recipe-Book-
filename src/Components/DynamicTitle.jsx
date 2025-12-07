import React, { useEffect } from 'react';
import {titles} from "../constant.js";
import { matchPath, useLocation } from 'react-router-dom';

const DynamicTitle = () => {
    const location = useLocation();
    useEffect(() =>{
        let newTitle = titles[location.pathname];

        if(!newTitle){
            //Check dynamic rote 
            const match = matchPath("/recipes/:id", location.pathname);
            if(match){
                const {id} = match.params;
                newTitle = `Recipe # ${id}`;

            }
        }
        if(!newTitle){
            newTitle = titles["/*"] || "Page not found";
        }
        document.title = newTitle;

    }, [location.pathname])
  return null;
}

export default DynamicTitle
