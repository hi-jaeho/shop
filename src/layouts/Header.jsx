import { Link, useNavigate } from "react-router-dom";

const Header = ({isLoggedIn, onLogout, username}) => {
    const navigate = useNavigate();
    return(
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/products'>상품 목록</Link>
            <Link to='/add-product'>상품 등록</Link>
            {!isLoggedIn ? (<Link to='/signin'>로그인</Link>) : 
            (
                <div className="header-user">
                    <span>{username}님!</span>
                    <button 
                    onClick={() => {onLogout(); navigate("/")}}
                    className="logout-btn">로그아웃</button> 
                </div>
            )}
        </div>
    )
}

export default Header;