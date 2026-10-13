import products from "../src/datas/products";
import { Link } from "react-router-dom";

const ProductList = () => {
    
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>가격</th>
                    </tr>
                     
                </thead>
                <tbody>

                </tbody>
            </table>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {/* ``을 써서 경로에 변수 할당 */}
                        <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
                        <p>가격: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;