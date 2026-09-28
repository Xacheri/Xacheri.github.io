/*
USAGE EXAMPLE:
    <div class="ExampleTarget"></div>
    <div class="ExampleTarget"></div>
    <div class="ExampleTarget"></div>
    <script src="./LoadComponent.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            LoadComponent("HelloWorld.html", "ExampleTarget")
        })
    </script>
*/


const LoadComponent = async (file, targetClass) => {
    var html = await FetchComponent(file);
    InjectComponent(targetClass, html)
}

const FetchComponent = async (file) => {
    var res = await fetch(file) // fetch the file
    var fileText = await res.text(); // set response to the text
    return fileText;
}

const InjectComponent = (targetClass, html) => {
    var elements = document.getElementsByClassName(targetClass)
    
    for(let i = 0; i < elements.length; i++)
    {
        elements[i].innerHTML = html;
    }
}