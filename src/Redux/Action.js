export const handleSearch = (id) => {
    return (dispatch) => {
        dispatch({
            type: "SEARCH",
            payload: id,
        })
    }
}

export const handleFilter = (id) => {
    return (dispatch) => {
        dispatch({
            type: "FILTER",
            payload: id,
        })
    }
}

export const handleSort = (id) => {
    return (dispatch) => {
        dispatch({
            type: "SORT",
            payload: id,
        })
    }
}