import React, { useEffect, useState } from 'react'
import { useEditProductMutation, useGetProductListQuery } from '../product/product.service'
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../product/product.interface';

const EditProduct = () => {
    const [onEdit] = useEditProductMutation()
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [origin, setOrigin] = useState<string>('');
    const [id, setId] = useState<number | null>(null);
    const paramId = useParams<{ id: string }>()
    const navigate = useNavigate()

    const { data: productList } = useGetProductListQuery(null);
    useEffect(() => {
        if (paramId.id && productList) {
            const productId = productList.find((product: IProduct) => product.id === Number(paramId.id));
            console.log(productId);

            if (productId) {
                setId(productId.id);
                setName(productId.name);
                setDescription(productId.description);
                setQuantity(productId.quantity);
                setOrigin(productId.origin);
            }
        }
    }, [paramId.id, productList])

    const editProduct = () => {
        if (id !== null) {
            const productNew: IProduct = {
                id, name, description, quantity, origin
            };
            onEdit(productNew);
            navigate("/product")
        }
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Name</label> <br /><br />
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />

                <label htmlFor="">description</label> <br /><br />
                <input type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)} /> <br /><br />

                <label htmlFor="">quantity</label> <br /><br />
                <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(+e.target.value)} /> <br /><br />

                <label htmlFor="">origin</label> <br /><br />
                <select name="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                    <option value=""></option>
                    <option value="ViệtNam">Việt Nam</option>
                    <option value="TrungQuốc">Trung quốc</option>
                    <option value="ĐàiLoan">Đài loan</option>

                </select><br /><br />
                <button type='button' onClick={editProduct} >Update MỚI</button>
            </form>
        </div>
    )
}

export default EditProduct