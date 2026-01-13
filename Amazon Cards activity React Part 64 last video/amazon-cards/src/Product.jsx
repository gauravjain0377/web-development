import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrice = ["100", "200", "300", "400"];
    let newPrice = ["199", "299", "399", "499"];
    let description = ["Beautiful Mobile", 
                    "WHat a gravance here", 
                    "What's the beauty of voice", 
                    "Gaming Mouse"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Product;