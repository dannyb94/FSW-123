export default function ToDo({items}){

    const listItems = items.map((item) => {
        return (
            <div key = {item.id}>
                <ul>
                    <li>
                        <input type="checkbox" class="items" name="laundry"></input>
                        <label>{item.text}</label>
                    </li>
                </ul>
            </div>
        )
    });

    return (
        <>
            {listItems}
        </>
    )
}