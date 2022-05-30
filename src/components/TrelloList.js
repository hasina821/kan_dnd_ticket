import React,{Fragment,useState,useRef} from "react"
import {makeStyles} from "@mui/styles"
import Trellocard from "./TrelloCard"
import styled from "@emotion/styled"
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import {Grid} from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Droppable } from "react-beautiful-dnd"

const AddCardButton = styled(Button)({
     background: '#ebecf0',
     width:'100%',
     marginBottom:12,
     border: 0,
     borderRadius: 3,
     color: '#636e72',
     height: 24,
     justifyContent:'left',
     textTransform:'lowercase'
   });

const PushcardButton = styled(Button)({
     '&:hover':{
          background:'#1B1464',
     },
     background: '#0652DD',
     width:'100%',
     marginBottom:12,
     border: 0,
     borderRadius: 3,
     color: 'white',
     height: 30,
     textTransform:'lowercase'
   });

const useStyle=makeStyles({
     container:{
          background:'#ebecf0',
          width:300,
          borderRadius:3,
          padding:8
     },
     input:{
          borderRadius:3,
          border:'none',
          width:'100%',
          height:60,
          marginBottom:12,
          resize:'none',
          overflow:'hidden',
          
     }
})

const ClearcardIcon = styled(ClearIcon)({
     color:'#7f8fa6',
     marginLeft:2,
     cursor:'pointer'

})

const More = styled(MoreHorizIcon)({
     '&:hover':{
          background:'#dcdde1'
     },
     cursor:'pointer'
})


const Trellolist = ({listId,title,allowcreatecard,cards}) =>{
     const style=useStyle()
     const [showform,setShowform]=useState(false)
     const [desc,setDesc]=useState("")

     const Handleshowform = () =>{
          setShowform(!showform)
     }

     const Hadlecloseform = () =>{
          setShowform(false)
     }

     const Addcard = (description,tab) =>{
          tab.push({id:4,description:description});
          setShowform(false)
     } 

     return(
          <Fragment>
               <Droppable droppableId={String(listId)}>
                  {(provided)=>(
                         <div  
                         {...provided.droppableProps} 
                         className={style.container}
                         ref={provided.innerRef}
                         >
                              <h4>{title}</h4>
                              {cards.map((card,index)=>(
                                   <Trellocard card={card} index={index} id={card.id}/>
                              ))}
                              {allowcreatecard&&(
                                   <div key={title}>
                                        {!(showform) &&(
                                        <AddCardButton onClick = {Handleshowform}>
                                             <AddIcon/>
                                             {"  "}ajouter une carte
                                        </AddCardButton>
                                        )}
                                        {showform &&(
                                        <>
                                        <textarea 
                                        autoFocus 
                                        className={style.input} 
                                        type="text" 
                                        placeholder="Saisissez ici le titre de votre carte"
                                        value={desc}
                                        onChange={(e)=>setDesc(e.target.value)}
                                        />
                                        <Grid container>
                                             <Grid xs={6}>
                                                  <PushcardButton onClick = {(e)=>Addcard(desc,cards)}>
                                                       ajouter une carte
                                                  </PushcardButton>
                                             </Grid>
                                             <Grid xs={1} onClick = { Hadlecloseform}>
                                                  <ClearcardIcon />
                                             </Grid>  
                                             <Grid xs={4}>
                                             </Grid> 
                                             <Grid xs={1}>
                                                  <More/>
                                             </Grid>
                                        </Grid>
                                        </>
                                        )}
                                   </div>
                              )}
                              {provided.placeholder}
                         </div>
                    )}
               </Droppable>
          </Fragment>
     )
}

export default Trellolist;