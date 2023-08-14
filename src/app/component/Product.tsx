import React from 'react'
import { IProduct } from '../product/product.interface'
import { useDeleteProductMutation, useGetProductListQuery } from '../product/product.service'
import { Link } from 'react-router-dom';
const Product = () => {
  const {data: productList} = useGetProductListQuery(null);
const productMap = productList as IProduct[] || []

const [onDelete] = useDeleteProductMutation()
  return (
    <div className="container">
        <Link to={`/product/add`}><button>Thêm</button></Link>

      <table className="border-separate border-spacing-2 border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300">Id</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">description</th>
            <th className="border border-slate-300">quantity</th>
            <th className="border border-slate-300">origin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {productMap.map(product =>{
          return <tr key={product.id}>
          <td className="border border-slate-300">{product.id}</td>
          <td className="border border-slate-300">{product.name}</td>
          <td className="border border-slate-300">{product.description}</td>
          <td className="border border-slate-300">{product.quantity}</td>
          <td className="border border-slate-300">{product.origin}</td>
          <td>
            <button type='button' onClick={() => onDelete(product)}>Xóa</button>
          <Link to={`/product/edit/${product.id}`}>  <button >sửa</button></Link>

          </td>
        </tr>
        })}
          
          
        </tbody>
      </table>
    </div>
  )
}

export default Product