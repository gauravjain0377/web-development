import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "Wrap",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={styles}>
        <Product title="One plus 10R" idx={0}/>
        <Product title="Apple Pencil" idx={1}/>
        <Product title="Marshal Speakers" idx={2}/>
        <Product title = "Logitech Mouse" idx={3}/>
        </div>
    );
}

export default ProductTab;