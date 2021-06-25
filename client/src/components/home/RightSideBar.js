import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-danger">Gợi ý kết bạn</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

            <div style={{opacity: 0.5}} className="my-2" >
                
                <small className="d-block">
                    Mạng xã hội 1p30s- Đồ án lập trình web
                </small>
                   
                <small className="d-block">
                   Nguyễn Hoàng Nhật - 5951071069
                </small>
                <small className="d-block">
                   Nguyễn Đình Gia Khải - 5951071042
                </small>
                <small className="d-block">
                   Lê Nguyễn Thái Khang - 5951071043
                </small>
                <small className="d-block">
                   Trần Thọ Hiền - 5951071026
                </small>
                <small>
                   &copy; 2021 1p30 From nhóm 11 
                </small>
            </div>

        </div>
    )
}

export default RightSideBar
