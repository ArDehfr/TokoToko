import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

export const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <div className='offerss'>
        <div className="offerss-left">
            <h1>FLAT 50% OFF</h1>
            <p><span>12</span> Hours <span>20</span> Mins</p>
            <button>Explore Now</button>
        </div>
        <div className="offerss-right">
            <img src={props.banner} alt="" />
        </div>
        </div>
        <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
            {all_product.map((item,i)=>{
                if (props.category===item.category) {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else{
                    return null;
                }
            })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
    </div>
  )
}
