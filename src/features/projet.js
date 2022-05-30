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
          },
          moveCard:(draft,action)=>{
               const {
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexEnd,
                    droppableIndexStart
               }=action.payload;
               //dans un même liste
               // in the same list
               if (droppableIdStart === droppableIdEnd) {
                    const list = draft.liste[droppableIdStart];
                    console.log(typeof list.card);
                    const card = list.card.splice(droppableIndexStart, 1);

                    list.card.splice(droppableIndexEnd, 0, ...card);
                    return { ...draft, [droppableIdStart]: list };
               }

               ///in a another list4
                // other list
               /*
               if (droppableIdStart !== droppableIdEnd) {
                    // find the list where the drag happened
                    const listStart = draft.liste[droppableIdStart];
                    // pull out the card from this list
                    const card = listStart.splice(droppableIndexStart, 1);
                    // find the list where the drag ended
                    const listEnd = draft.liste[droppableIdEnd];
          
                    // put the card in the new list
                    listEnd.splice(droppableIndexEnd, 0, ...card);
                    return {
                    ...draft,
                    [droppableIdStart]: listStart,
                    [droppableIdEnd]: listEnd
                    };
               }
               return draft;
               */

          }

     },
     extraReducers:{

     }
})


export const {addCard,deleteCard,moveCard}=projetSlice.actions
export default projetSlice;