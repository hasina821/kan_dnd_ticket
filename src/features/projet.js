import {createSlice} from "@reduxjs/toolkit"



const liste=[
     {id:1,title:"À faire",allowcreatecard:true,card:[
          {id:0,description:"description1"},
          {id:1,description:"description2"},
          {id:2,description:"description3"}
     ]},
     {id:2,title:"En cours",allowcreatecard:false,card:[
          {id:3,description:"desc1"},
          {id:4,description:"desc2"},
          {id:5,description:"desc3"}
     ]},
     {id:3,title:"Terminé",allowcreatecard:false,card:[
          {id:6,description:"description1"},
          {id:7,description:"description2"},
     ]},
     {id:4,title:"Collaboration",allowcreatecard:false,card:[
          {id:8,description:"desc1"},
          {id:9,description:"desc2"},
          {id:10,description:"desc3"}
     ]}

]

const projetSlice = createSlice({
     name:'projet',
     initialState:{
          title:'title of the project',
          liste:liste,
     },
     reducers:{
          addCard:(draft,action)=>{
               const newCard={
                    id:action.payload.id,
                    description:action.payload.description
               }
               draft.liste[0].card.push(newCard);
          },
          deleteCard:(draft,action)=>{
          }

     },
     extraReducers:{

     }
})


export const {addCard,deleteCard}=projetSlice.actions
export default projetSlice;