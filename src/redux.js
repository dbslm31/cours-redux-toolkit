import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],

  /*
  Reducer = fonction qui va recevoir le state actuel et l'action que l'on veut faire dessus
  reducers:
  name: (state,action) => {logique}
  */

  /*
  action: quelle tâche à faire (type) et les données dont on va avoir besoin  (payload)
  {type: "ADD_TASK", payload: "Faire des courses"}
  */

  reducers: {
    addTask: (state, action) => {
      //{type: "ADD_TASK", payload: "Faire des courses"}
      const newTask = {
        id: Date.now(),
        done: false,
        //Car le texte est le payload définit dans l'action
        text: action.payload,
      };
      //push car le state initial est  un tableau
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      //{type: "TOGGLE_TASK", payload: id}
      //encore une fois find parce que state est un tableau
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: () => {
      //{type: "todo/deleteTask", payload: id}
      //garde uniquement dans le tableau les  tâches dont l'id est différent de l'id du payload
      state.filter((t) => t.id !== action.payload);
    },
  },
});

// Mise en place du store
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
