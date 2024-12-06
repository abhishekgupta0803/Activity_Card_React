 import "./Product.css"
 import Price from "./Price.jsx"

 function Product({title,idx}){
    let oldPrice = ["12,495","32,444","437,89","88,798"];
    let newPrice = ["65,342","123,23","124","905,87"];
    let description = [
        ["8000 DPI","5 Programmable Buttons"],
        ["intuative surface","designed from ipad pro"],
        ["design for ipad pro","intutive surface"],
        ["wireless","optical orientation"],
    ];
    return (
        <div className="Prod">
            <h1>{title}</h1>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldprices={oldPrice[idx]} newPrices={newPrice[idx]} />
            
        </div>
    );
}

export default Product;