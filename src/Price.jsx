export default function Price({oldprices , newPrices}){

    let oldStyle = {
            textDecorationLine:"line-through",
    }
    let newStyle = {
        fontWeight:"bold",
    }
    let styles = {
        backgroundColor:"#e0c367",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    return (
        <div style={styles}>
            <span style={oldStyle}>{oldprices}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyle}>{newPrices}</span>
        </div>
    );
}