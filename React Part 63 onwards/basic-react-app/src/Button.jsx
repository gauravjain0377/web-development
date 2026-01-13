function doSomething() {
    console.log("Button was clicked");
}

function printBye() {
    console.log("Bye");
}

export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>Click me!</button>
            <p onMouseOver={printBye}>This paragraph is for event demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vero reprehenderit, aut officia, rerum quos quas alias sit voluptatum unde quia ipsa aliquam! Ducimus nobis minus quaerat iusto laboriosam numquam?</p>
        </div>
    );
}