import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

   const toggleCategory = (e) => {
          if(category.includes(e.target.value)){
              setCategory(prev => prev.filter(item => item !== e.target.value))
          }
          else{
            setCategory(prev => [...prev,e.target.value])
          }
   }

   const toggleSubCategry = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value])
    }
   }

   const applyFilter = () => {
    let productsCopy = products.slice()

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    setFilterProducts(productsCopy)
   }

  useEffect(() => {
    setFilterProducts(products)
  }, [])

 useEffect(() => {
  applyFilter()
 }, [category, subCategory])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60 ">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-dm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory}/> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-dm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategry}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategry}/> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategry}/> Winterwear
            </p>
          </div>
        </div>
      </div>

          <div className='flex-1 '>
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1={'ALL'} text2={'COLLECTIONS'}/>
              <select className='border-2 border-gray-300 text-sm px-2'>
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-higt">Sort by: Low to Higt</option>
                <option value="higt-low">Sort by: Higt to Low</option>
              </select>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
              ))
            }
            </div>
          </div>
    </div>
  );
};

export default Collection;
