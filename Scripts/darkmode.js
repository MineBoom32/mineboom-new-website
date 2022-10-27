const divs = document.querySelectorAll('.partition > div');
const heading = document.querySelector('#titlehead');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("Dark mode detected, switching to inverted colors");
    document.body.style.backgroundImage = "url(../BlackGrid.png)";
    heading.style.color = "white";
    divs.forEach(div => {
        var headings = div.querySelectorAll('h1');
        var innerdivs = div.querySelectorAll('div');
        var paragraphs = div.querySelectorAll('p');
        var lists = div.querySelectorAll('ul')
        var lists = div.querySelectorAll('ul')
        div.style.backgroundColor = "rgba(128, 128, 128, 0.7)";
        headings.forEach(head => {
            head.style.backgroundColor = "black";
            head.style.color = "white";
        });
        innerdivs.forEach(idiv => {
            idiv.style.backgroundColor = "black";
        });
        paragraphs.forEach(para => {
            para.style.color = "white";
        });
        lists.forEach(list => {
            var listHeaders = div.querySelectorAll('span');
            list.style.backgroundColor = "black";
            list.style.color = "white";
            listHeaders.forEach(lhead => {
                lhead.style.color = "cyan";
            })
        });
    });
}