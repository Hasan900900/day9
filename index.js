function myFunction() {
    const input1 = parseInt(document.getElementById("inp").value);

    if (input1 > 20) {
        alert("error");
        return;
    }

    if (input1 <= 20) {
        const myList = document.getElementById("mylist");
        // myList.innerHTML = "Hello";

        for (let i = 0; i < input1; i++) {

            const section = document.createElement("div");
            section.id = i;
            section.style.backgroundColor = "#0000" + Math.floor(Math.random() * 90 + 10);
            section.style.color = "#ffff" + Math.floor(Math.random() * 90 + 10);





            const textnode = document.createTextNode("hello");

            section.appendChild(textnode);

            myList.appendChild(section);
        }
    }
}
function Onclear() {
    document.getElementById("mylist").innerHTML = '';
    document.getElementById("inp").value = ' ';
}

