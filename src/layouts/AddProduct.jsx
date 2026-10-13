import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    // 폼 데이터(객체) 상태 관리
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: ""
    });

    // 페이지 이동 훅
    const navigate = useNavigate();

    // 입력값 변경 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // 입력값 상태 업데이트
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("상품 추가: ", formData);

        // Input validation
        if(!formData.name.trim() || !formData.price || !formData.description.trim()){
            alert("모든 필드를 입력하세요")
            return; // 즉시 종료 -> 안쓰면 상품 등록 alert가 뜸
        }

        // price field validation
        if(isNaN(formData.price) || formData.price < 0){
            alert("가격은 0보다 큰 숫자를 입력하세요.");
            return;
        }

        // 가격 필드 검증

        alert('상품이 등록되었습니다.')
        navigate("/products");
    }

    return(
        <div>
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명: </label>
                    <input 
                        type="text"
                        id="name" /* 위에 htmlFor과 같아야 함 */
                        name="name"
                        placeholder="상품명을 입력하세요"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">가격: </label>
                    <input 
                        type="number"
                        id="price" /* 위에 htmlFor과 같아야 함 */
                        name="price"
                        placeholder="가격을 입력하세요"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">설명: </label>
                    <textarea
                        id="description" /* 위에 htmlFor과 같아야 함 */
                        name="description"
                        placeholder="설명을 입력하세요"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">등록</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;