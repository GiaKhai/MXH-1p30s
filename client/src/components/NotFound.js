import React from 'react'

const NotFound = () => {
    return (
        <div className="position-relative" style={{minHeight: 'calc(100vh - 70px)'}}>
            <h2 className="position-absolute text-secondary"
            style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
               Lỗi rồi :(  Xin lỗi bạn vì sự bất tiện này,hãy báo với admin và sẽ được sửa sau 1p30s
            </h2>
        </div>
    )
}

export default NotFound
