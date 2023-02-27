import React from "react";
function Home()
{
    return(
        <div>
            <div className="add-to-cart">
<img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios13-iphone-xs-home-assistive-touch.png"/>
            
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                    {props.addToCartHandler({price:1000,name:'i phone 11'})}
                        }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
} 

export default Home