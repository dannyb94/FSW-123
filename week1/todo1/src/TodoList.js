export default function List(){
    return (
        <div>
            <h1>Checklist</h1>
            <ul>
                <li>
                    <input type="checkbox" class="items" name="laundry"></input>
                    <label>Pick up dry cleaning</label>
                </li>
                <li>
                    <input type="checkbox" class="items" name="groceries"></input>
                    <label>Buy pineapples and flour</label>
                </li>
                <li>
                    <input type="checkbox" class="items" name="carWash"></input>
                    <label>Wash car</label>
                </li>
                <li>
                    <input type="checkbox" class="items" name="mechanic"></input>
                    <label>Get oil change</label>
                </li>
            </ul>
        </div>
    );
}