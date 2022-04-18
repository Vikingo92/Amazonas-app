import { typesUsers } from "../types/types";

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUsers.register:
            return {
                users: [action.payload]
            }
        case typesUsers.list:
            return {
                users: [...action.payload]
            }
        case typesUsers.delete:
            return {
                users: state.users.filter(u => u.email !== action.payload)
            }
        case typesUsers.edit:
            return {
                ...state
            }

        default:
            return state;
    }
}