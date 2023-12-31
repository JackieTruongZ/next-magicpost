import React from 'react'
import MenuItem from './MenuItems'

const Menu = () => {
    return (
        <div className="flex absolute left-50">
            <MenuItem onClick={() => { window.location.href = '/director/pointmanager'}}>
                <div>
                    <p>Point</p>
                </div>
            </MenuItem>
            <MenuItem onClick={() => {window.location.href = '/director/accountmanager' }}>
                <div>
                    <p>Account</p>
                </div>
            </MenuItem>
            <MenuItem onClick={() => {window.location.href = '/director/ordermanager'}}>
                <div>
                    <p>Order</p>
                </div>
            </MenuItem>
        </div>
    )
}

export default Menu