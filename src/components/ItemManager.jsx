import React, { useRef, useState } from 'react';
const ComponentName = () => {
  let itemref  = useRef()
  let priceref=useRef()
  let categoryref=useRef()
  let quantityref=useRef()

  let categories=["Electronics","Toys","Groceries","Clothing"]
  let categoriesUI = categories.map((c)=><option value={c}>{c}</option>)

  const [itemsArray,setItemsArray]=useState([])
  const [ui,setui]=useState()
  let btnref = useRef()
  let olddataref = useRef()
  // {itemname:"Mobile"},
  let addItem=()=>
  {
    if(btnref.current.value=="Add")
    {      
    let item = {itemname: itemref.current.value,quantity:quantityref.current.value,
      category:categoryref.current.value,price:priceref.current.value}
    itemsArray.push(item)
    }
    else
    {
      let index = itemsArray.findIndex((i)=>i.itemname==olddataref.current.value)
      
      itemsArray[index].itemname = itemref.current.value
      itemsArray[index].category = categoryref.current.value
      itemsArray[index].quantity = quantityref.current.value
      itemsArray[index].price = priceref.current.value
    }
    itemref.current.value=""
    priceref.current.value=""
    quantityref.current.value=""
    
    showItems()
  }
  let deleteItem=(iname)=>
  {
    alert(iname)
    let index = itemsArray.findIndex((i)=>i.itemname==iname)
    itemsArray.splice(index,1)
    showItems()
  }
  let editItem = (item)=>
  {
   btnref.current.value="Update"

   itemref.current.value=item.itemname;
   priceref.current.value=item.price
   categoryref.current.value=item.category 
   quantityref.current.value=item.quantity

   olddataref.current.value=item.itemname; 
  }
  let showItems = ()=>
  {
    let x = itemsArray.map((item)=>{
    return <tr><td>{item.itemname}</td>
    <td>{item.price}</td>
    <td>{item.category}</td>
    <td>{item.quantity}</td>
    <td><input type="button" className='border-2 bg-orange-700 text-white'
     value="edit" onClick={()=>editItem(item)}></input></td>
    <td><input type="button" className='border-2 bg-orange-700 text-white'
     value="delete" onClick={()=>deleteItem(item.itemname)}></input></td></tr>
  })
  setui(x)
  }
 return (
  <div>
   <div>Enter Item NAme : <input type="text" ref={itemref} className="border-2" /></div>

   <div>Price : <input type="text" ref={priceref} className="border-2" /></div>

   <div>Category : 
    <select ref={categoryref} className="border-2">
      {categoriesUI}
      
      </select>
    
    </div>
   <div>quantity : <input type="number" ref={quantityref} className="border-2" /></div>

   <input type="text" ref={olddataref} ></input>

   <input type="button" value = "Add" onClick={()=>addItem()}
   className="border-2 p-2 bg-yellow-500" ref={btnref}></input>
   <br></br>
   <table>
   <thead>
      <tr>
      <th>ItemNAme</th>
      <th>Price</th>
      <th>Category</th>
      <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {ui}
    </tbody>
   </table>
   </div>
 )}
export default ComponentName;