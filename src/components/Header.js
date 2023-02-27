import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png" />
            </div>
        </div>
    )
}

export default Header