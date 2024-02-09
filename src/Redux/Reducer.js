const init = {
    users: [
        { name: "Omprakash Jat", ott: "Netflix", rate: 1699, status: "Yearly" },
        { name: "Vikas Borse", ott: "Amazon Prime", rate: 599, status: "Quarterly" },
        { name: "Kevin Chauhan", ott: "Amazon prime", rate: 999, status: "Yearly" },
        { name: "Jay Nandarbarwala", ott: "Zee5", rate: 99, status: "Monthly" },
        { name: "Dev Chauhan", ott: "Disney+ Hotstar", rate: 149, status: "Quarterly" },
        { name: "Priyanshu Mishra", ott: "Netflix", rate: 149, status: "Monthly" },
        { name: "Kashyap Chauhan", ott: "Disney+ Hotstar", rate: 1499, status: "Yearly" },
        { name: "Sahil Kapadia", ott: "Amazon Prime", rate: 299, status: "Monthly" },
        { name: "Anant Shah", ott: "Disney+ Hotstar", rate: 149, status: "Quarterly" },
        { name: "Nilay Patel", ott: "Zee5", rate: 899, status: "Yearly" },
    ]
}

const examReducer = (state = init, action) => {

    if (action.type === "SEARCH") {
        // const searchValue = e.target.value.toLowerCase()
        const searchValue = action.payload.toLowerCase();
        const filteredUsers = state.users.filter(user => user.name.toLowerCase().includes(searchValue));

        return {
            ...state,
            filteredUsers,
        };
    }
    if (action.type === "FILTER") {
        const term = action.payload;
        const filteredUsers = term ? state.users.filter(user => user.status === term) : state.users;

        return {
            ...state,
            filteredUsers,
        };
    }
    if (action.type === "SORT") {
        const sortBy = action.payload;
        const sortedUsers = [...state.users];

        if (sortBy === 'asc') {
            sortedUsers.sort((a, b) => a.rate - b.rate);
        } else if (sortBy === 'desc') {
            sortedUsers.sort((a, b) => b.rate - a.rate);
        }

        return {
            ...state,
            filteredUsers: sortedUsers,
        };
    }

    return state
}

export default examReducer