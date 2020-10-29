
const initialState = {
   home: true,
   projects: false,
   contact: false,
   resume: false

}

const reducer = (state = initialState, action) => {
   if (action.type === 'HOME') {
      return {
         home: true,
         projects: false,
         contact: false,
         resume: false
      }
   }
   if (action.type === 'PROJECTS') {
      return {
         home: false,
         projects: true,
         contact: false,
         resume: false
      }
   }
   if (action.type === 'CONTACT') {
      return {
         home: false,
         projects: false,
         contact: true,
         resume: false      
      }
   }
   if (action.type === 'RESUME') {
      return {
         home: false,
         projects: false,
         contact: false,
         resume: true
      }
   }
   return state;
};

export default reducer;