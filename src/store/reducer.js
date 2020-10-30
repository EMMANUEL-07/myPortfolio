
const initialState = {
   home: true,
   projects: false,
   contact: false,
   resume: false,
   menuTog: false,
   menuHTog: false

}

const reducer = (state = initialState, action) => {
   if (action.type === 'HOME') {
      return {
         home: true,
         projects: false,
         contact: false,
         resume: false,
         menuTog: false,
         menuHTog: false
      }
   }
   if (action.type === 'PROJECTS') {
      return {
         home: false,
         projects: true,
         contact: false,
         resume: false,
         menuTog: false,
         menuHTog: false
      }
   }
   if (action.type === 'CONTACT') {
      return {
         home: false,
         projects: false,
         contact: true,
         resume: false,
         menuTog: false,
         menuHTog: false      
      }
   }
   if (action.type === 'RESUME') {
      return {
         home: false,
         projects: false,
         contact: false,
         resume: true,
         menuTog: false,
         menuHTog: false
      }
   }
   if (action.type === 'MENUTOGGLE') {
      return {
         ...state,
         menuTog: !state.menuTog,
      }
   }
   if (action.type === 'MENUHTOGGLE') {
      return {
         home: false,
         projects: false,
         contact: false,
         resume: false,
         menuTog: false,
         menuHTog: !state.menuHTog
      }
   }
   return state;
};

export default reducer;