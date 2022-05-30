import React,{Fragment, useEffect,useState} from "react"
import Trellolist from "../../components/TrelloList"
import {Grid} from "@mui/material"
import Navbar from "../../components/Navbar"
import { DragDropContext } from "react-beautiful-dnd"
import {useSelector} from "react-redux"


export default function Home(){
     const projet=useSelector(state=>state.projet);
     const onDragEnd = (result) =>{
          const {destination,source,draggableId}=result;
          if(!destination){
               return;
          }
     }
     return(
          <Fragment>
               <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                         <Navbar/>
                         <h4>{projet.title}</h4>
                         <Grid container>
                              {projet.liste.map(list=>(
                              <Grid lg={2}>
                                   <Trellolist listId={list.id} cards={list.card} title={list.title} allowcreatecard={list.allowcreatecard}/>
                              </Grid>
                              ))}
                              <Grid lg={4}>
                              </Grid>
                         </Grid>
                    </div>
               </DragDropContext>
          </Fragment>
     )
  }