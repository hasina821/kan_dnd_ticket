import React,{Fragment, useEffect,useState} from "react"
import Trellolist from "../../components/TrelloList"
import {Grid} from "@mui/material"
import Navbar from "../../components/Navbar"
import { DragDropContext } from "react-beautiful-dnd"
import {useSelector,useDispatch} from "react-redux"
import { moveCard } from "../../features/projet"


export default function Home(){
     const dispatch=useDispatch()
     const projet=useSelector(state=>state.projet);
     const onDragEnd = (result) =>{
          const { destination, source, draggableId, type } = result;
           
          if (!destination) {
                 return;
               }
           
          dispatch(moveCard ({
               droppableIdStart:source.droppableId,
               droppableIdEnd:destination.droppableId,
               droppableIndexEnd:source.index,
               droppableIndexStart:destination.index,
               draggableId,
          }));
          
     }
     return(
          <Fragment>
               <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                         <Navbar/>
                         <h4>{projet.title}</h4>
                         <Grid container>
                              {projet.liste.map(list=>(
                              <Grid item key={list.id} lg={2}>
                                   <Trellolist listId={list.id} cards={list.card} title={list.title} allowcreatecard={list.allowcreatecard}/>
                              </Grid>
                              ))}
                              <Grid item  lg={4}>
                              </Grid>
                         </Grid>
                    </div>
               </DragDropContext>
          </Fragment>
     )
  }