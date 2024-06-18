import "./style.css"
import { Link } from 'react-router-dom';

export default function HowToPage() {
    return (
        <>
        <div className=" d-flex justify-content-end">
                <button className="howToBtn">
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Back</Link>
                </button>
            </div>
        <p>how to</p>
        </>
    )
}