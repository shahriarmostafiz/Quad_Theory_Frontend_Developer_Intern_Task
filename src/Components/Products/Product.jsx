import React, { useContext, useState } from 'react';
import { MyContext } from '../../ContextProvider';
import ProductCard from './ProductCard';
import "./product.css"
// import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Product = ({ type }) => {
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(4)

    // let start = 0
    // let end = 4
    const nextPage = () => {
        setEnd(8)
        setStart(4)
        // end = 8
    }
    const prevPage = () => {
        // start = 0
        // end = 4
        setStart(0)
        setEnd(4)
    }
    const { data } = useContext(MyContext)
    function getRandomSort() {
        return Math.random() - 0.5;
    }
    const allProducts = data.filter(item => item[type] === true)
    const products = allProducts.slice(start, end)

    // console.log(products);
    return (
        <div className='my-4 py-4'>
            <div className="py-2 flex justify-between">
                <h1 className='pb-4'>{
                    type === "IsPopular" ? "Popular" : "Recommended"
                }</h1>
                <div className='mr-8 flex items-center'>
                    <button className='hover:text-orange-500' onClick={() => document.getElementById('my_modal_1').showModal()}>Add More </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {/* //  onClick={ }>Add More  </button> */}
                    <button onClick={prevPage} className='hover:text-orange-400'><IoIosArrowBack /></button>
                    <button onClick={nextPage} className='hover:text-orange-400'><IoIosArrowForward /></button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    products.map(item => <ProductCard key={item.Id} item={item}></ProductCard>)
                }
            </div>
        </div>

    );
};

export default Product;