
function List () {
    const fruits=["Apple","Orange","Banana","Strwbarry"];
    const listItems=fruits.map(fruit=> <li>{fruit}</li>)
    return(
    <ul>{listItems}</ul>
    )
}
export default List