const INITIAL_STATE = { summary: { credit: 0, debt: 0} }

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DASHBOARD_SUMMARY':
            console.log( action.payload.data )            
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}