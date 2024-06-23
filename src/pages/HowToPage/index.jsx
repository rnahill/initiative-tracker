import "./style.css"
import { Link } from 'react-router-dom';

const style = {
    height: "100vh", 
    width: "85%", 
    backgroundColor: "#8A739A", 
    position:"relative", 
    left:"8%"

}


export default function HowToPage() {
    return (
        <>
        <div style={style}>
            <div className="d-flex justify-content-end">
                <button className="howToBtn">
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Back</Link>
                </button>
            </div>
        <p>how to</p>
        </div>
        </>
    )
}