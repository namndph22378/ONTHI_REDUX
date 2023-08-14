import React, { useState } from 'react'
import { useAddProductMutation } from '../product/product.service';
import { IProduct } from '../product/product.interface';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [origin, setOrigin] = useState<string>('');

    const [onAdd] = useAddProductMutation();
    const navigate = useNavigate()
    const addProduct = (e: any) => {
        const productNew: IProduct = {
            name, description, quantity, origin
        };
        onAdd(productNew);
        navigate("/product")
        // console.log(productNew);
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Name</label> <br /><br />
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} /> <br /><br />

                <label htmlFor="">description</label> <br /><br />
                <input type="textarea" name="description" onChange={(e) => setDescription(e.target.value)} /> <br /><br />

                <label htmlFor="">quantity</label> <br /><br />
                <input type="number" name="quantity" onChange={(e) => setQuantity(+e.target.value)} /> <br /><br />

                <label htmlFor="">origin</label> <br /><br />
                <select name="origin" onChange={(e) => setOrigin(e.target.value)}>
                    <option value=""></option>
                    <option value="ViệtNam">Việt Nam</option>
                    <option value="TrungQuốc">Trung quốc</option>
                    <option value="ĐàiLoan">Đài loan</option>

                </select><br /><br />
                <button onClick={addProduct}>THÊM MỚI</button>
            </form>
        </div>
    )
}

export default AddProduct