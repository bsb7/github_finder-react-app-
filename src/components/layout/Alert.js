import React from 'react'

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className='alert alert-secondary'>
                <i className='fas fa-info-circle'></i>{alert.msg}
            </div>
        )
    )
}

export default Alert
