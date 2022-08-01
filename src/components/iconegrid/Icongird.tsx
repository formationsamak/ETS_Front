import React from 'react'
import {Box} from "@mui/material";
import icon1 from "../../asstes/Vector-1.png"
import icon2 from "../../asstes/FundOf Logotype black 1.png"
import icon3 from "../../asstes/DABlogo_noir-2 1.png"
import icon4 from "../../asstes/Konvi Logo 1 1.png"
import icon5 from "../../asstes/QB_logo_Black@4x 1.png"
import icon6 from "../../asstes/Vector-2.png"
import CardMedia from '@mui/material/CardMedia';
import { Margin, Padding } from '@mui/icons-material';

function Icongird() {
  return (
    <Box sx={{
        height: "40vh",
        overflow: "clip",
        position: "relative",
        width: "100vw",
        backgroundColor:'#eeeeee',
        display: 'flex'
        
        }}>

      
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px",
       }} >
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
        <img src={icon1} alt="" /></Box>
      </Box>
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px",
       }} >
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
        <img src={icon2} alt="" /></Box>
      </Box>
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px",
       }} >
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
        <img src={icon3} alt="" /></Box>
      </Box>
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px",
       }} >
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
        <img src={icon4} alt="" /></Box>
      </Box>
      
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px",
       }} >
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
        <img src={icon5} alt="" /></Box>
      </Box>
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px",
       }} >
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
        <img src={icon6} alt="" /></Box>
      </Box>
      

      

      
     
    </Box>
  )
}

export default Icongird