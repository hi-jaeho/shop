import { useParams, useNavigate } from "react-router-dom"
import products from "../src/datas/products";

const ProductInfo = () => {
    const {id} = useParams();

    // id에 해당 상품 가져오기
    // id는 문자이므로 숫자형ㅇ으로 변환 - Number(), ParseInt()로 변환
    const product = products.find((p)=>(p.id === Number(id)));

    // 페이지 이동
    const navigate = useNavigate();
    return (
        <div>
            <h2>상품 상세 페이지</h2>
            {/* <h3>상품 ID: {id}</h3> */}
            <div className="product-detail">
                <h3>상품명: {product.name}</h3>
                <h3>가격: {product.price}</h3>
                <h3>상품설명: {product.description}</h3>
            </div>
            <div>
                <button onClick={() => {navigate('/products')}}>목록 보기</button>
            </div>
        </div>
    )
}

export default ProductInfo;