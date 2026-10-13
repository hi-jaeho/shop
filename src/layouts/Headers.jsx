import { Link } from "react-router-dom"

const Headers = () => {

    return (
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/products'>상품 목록</Link>
            <Link to='/add-product'>상품 등록</Link>
        </div>
    )
}

export default Headers;