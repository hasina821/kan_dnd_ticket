import {createSlice} from "@reduxjs/toolkit"

const initialState=[
     {id:`list-${0}`,title:"À faire",allowcreatecard:true,cards:[
          {id:`card-${0}`,description:"description1"},
          {id:`card-${1}`,description:"description2"},
          {id:`card-${2}`,description:"description3"}
     ]},
     {id:`list-${1}`,title:"En cours",allowcreatecard:false,cards:[
          {id:`card-${3}`,description:"desc1"},
          {id:`card-${4}`,description:"desc2"},
          {id:`card-${5}`,description:"desc3"}
     ]},
     {id:`list-${2}`,title:"Terminé",allowcreatecard:false,cards:[
          {id:`card-${6}`,description:"description1"},
          {id:`card-${7}`,description:"description2"},
     ]},
     {id:`list-${3}`,title:"Collaboration",allowcreatecard:false,cards:[
          {id:`card-${8}`,description:"desc1"},
          {id:`card-${9}`,description:"desc2"},
          {id:`card-${10}`,description:"desc3"}
     ]}
]

const projetSlice = createSlice({
     name:'projet',
     initialState,
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
                    droppableIndexStart,
                    draggableId
               }=action.payload;
               //dans un même liste
               // in the same list
               if (droppableIdStart === droppableIdEnd) {

                    const list = draft.find(list=>droppableIdStart);
                    const card = list.cards.splice(droppableIndexStart, 1);
                    list.cards.splice(droppableIndexEnd, 0, ...card);
                   
                    return draft;
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