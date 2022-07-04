import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { getShoesDataRequest,getShoesDataSuccess,getShoesDataFailure} from '../Redux/AppReducer/action'
import {store} from '../Redux/store'
import axios from 'axios';
import{ state } from "../Redux/AppReducer/reducer"
import {useDispatch,useSelector} from 'react-redux'
const Shoes = () => {
  const dispatch=useDispatch();
  const data=useSelector((store)=>state.reducer)

  const getData=()=>{
    //console.log("HIII");
   const ans= axios.get('shoes').then(res=>dispatch(getShoesDataSuccess(res.data))).catch((e)=>dispatch(getShoesDataFailure(e)))
   
  }
  useEffect(()=>{
    getData()
  },[])
  console.log(shoes)
  return (
    <div>
      <Filter />
      <div>
      
      </div>
    </div>
  );
};

export default Shoes;
