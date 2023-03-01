import "./NewMemoPage.css";

export default function NewNotePage() {
    return (
        <form>    
            <h1>Create a Memo</h1>
            <div>
                <label>Title</label>
                <input type="text" placeholder="Grocery Shopping"></input>
            </div>
            <div>
                <label>Priority</label>
                <select name="priority">
                    <option value="🔴 Urgent">🔴 Urgent</option>
                    <option value="🔵 Important">🔵 Important</option>
                    <option value="🟢 Normal">🟢 Normal</option>
                </select>
            </div>
            <div>
                <label>Category</label>
                <select name="category">
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="School">School</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Social">Social</option>
                    <option value="Family">Family</option>
                    <option value="Hobby">Hobby</option>
                    <option value="Misc.">Misc.</option>
                </select>
            </div>
            <div>
                <label>Memo</label>
                <textarea name="text"rows="7" placeholder="Bananas, Eggs, Bread, Milk, Creamer..."></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}