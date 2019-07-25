const initialState = {
    searchValue: "",
    videoList: [],
    activeVideo: "example",
}

export function videoReducer(state=initialState, action) {
    switch(action.type) {
        case "one":
            return state
        case "two":
            return state
        default:
            return state
    }
}