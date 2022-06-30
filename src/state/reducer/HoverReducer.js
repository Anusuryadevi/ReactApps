import * as actions from "../ActionTypes"


const initialState = {
    user: {
        "name": "Anu",
        "phone":"909876545"
    }
}

 const hoverReducer = (store = { user: {} }, action) => {

    switch (action.type) {
        case actions.FETCH_USERDATA: 
            return { ...store, user : {...store.user, ...action.payload}}
           
        case actions.HOVERED:
            console.log("hovered",action.payload)
             return { ...store, user: { ...store.user, title : action.payload.title, info: action.payload.info } };
        default: 
        console.log("default",store) 
        return store
    }

}

export default hoverReducer;