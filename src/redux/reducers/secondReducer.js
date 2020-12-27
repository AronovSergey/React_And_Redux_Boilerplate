const initialState = {
    
};

export default function secondReducer(state = initialState, action) {
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