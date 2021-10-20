const initState = {
    api: [],
  };


 const heroReducer = (state = initState, action) => {
      switch (action.type) {
          case "FETCH_HERO":
              return {
                  ...state, 
            api: action.payload.hero
      };
      default: 
      return {...state};
    }
  }

  export default heroReducer

