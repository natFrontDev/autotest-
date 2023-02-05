import {UserType} from '../HW8'

let SORT:string = 'sort'
let CHECK = 'check'

type ActionType = { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType):UserType[]=> {
      // need to fix any
    let endState: UserType[];

    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                endState = [...state]
                return endState.sort((a,b) =>
                    a.name.localeCompare(b.name))}
            else if (action.payload === 'down') {
                endState = [...state]
                return endState.sort((a,b) =>
                    a.name.localeCompare(b.name)).reverse()}
            // by nam
            // need to fix
            return state
        }
        case 'check': {
            return  state.filter((i => i.age >= action.payload))// need to fix
        }

        default:
            return state
    }
}
