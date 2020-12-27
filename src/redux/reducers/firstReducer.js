const initialState = {
    
};

export default function firstReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
            };
        case 'FAIL':
            return {
                ...state,
            };
        default:
            return state;
    }
}