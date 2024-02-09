import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { handleFilter, handleSearch, handleSort } from '../Redux/Action';


const Test = () => {

    const filteredUsers = useSelector((state) => state.filteredUsers || state.users);
    const dispatch = useDispatch()
    const [filterData, setFilterData] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [sortOrder, setSortOrder] = useState('asc');

    // console.log(users);


    const handleSearchUser = (e) => {
        console.log(e.target.value);
        setFilterData(e.target.value)
        dispatch(handleSearch(e.target.value))
    }

    const handleCategoryChange = (e) => {
        const term = e.target.value;
        setSelectedCategory(term)
        dispatch(handleFilter(term === 'Term' ? '' : term));
    }


    const handleSortButtonClick = (e) => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        dispatch(handleSort(newSortOrder));
        setSortOrder(newSortOrder);
    }
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="container">
                    <h1 className='text-center'>Filter - Sorting - Searching Exam </h1>
                    <div className="d-flex justify-content-around align-items-center mb-3">
                        <div className="col-3">
                            <label htmlFor="">Search Name</label>
                            <input type="text" className='form-control' placeholder='Search Name' onChange={handleSearchUser} />
                        </div>
                        <div className="col-3">
                            <label htmlFor="">Filter Term</label>
                            <select className='bor-rad form-control w-100 pyy-2' value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="Term" className='pyy-2 bor-rad'>--Term--</option>
                                <option value="Yearly" className='pyy-2 bor-rad'>Yearly</option>
                                <option value="Quarterly" className='pyy-2 bor-rad'>Quarterly</option>
                                <option value="Monthly" className='pyy-2 bor-rad'>Monthly</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <label htmlFor="">Sorting Price</label>
                            <div>
                                <button className='btn btn-dark bor-rad' onClick={handleSortButtonClick}>Sort Price {sortOrder === 'asc' ? "go to High" : "go to Low"}</button>
                            </div>
                        </div>
                    </div>
                    <table className='table border table-dark table-striped'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Name</th>
                                <th>OTT Platforms</th>
                                <th>Rate</th>
                                <th>Subscription status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredUsers && filteredUsers.map((user, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.ott}</td>
                                        <td>{user.rate}</td>
                                        <td><span className='badge bg-secondary'>{user.status}</span></td>
                                    </tr>
                                })

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Test