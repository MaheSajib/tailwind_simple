import React from 'react'
import imgOne from '../Images/1.jpg'
import imgTwo from '../Images/2.jpg'

const Content = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={imgOne} alt="" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className='text-2xl mb-2'>Eggy Muffins</h2>
                    <p>Crispy, delicious and nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={imgTwo} alt="" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className='text-2xl mb-2'>Eggy Muffins Editions </h2>
                    <p>Crispy, delicious and nutritious</p>
                    <span>$20</span>
                </div>
            </div>
        </>
    )
}

export default Content
