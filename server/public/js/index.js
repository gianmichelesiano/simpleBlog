
const base = 'http://localhost:3000';

function listPosts() {
    fetch(base+'/posts')
    .then((res) => res.json() )
    .then(( listData ) => {

        bodyElem = document.getElementsByTagName('body')[0]
        titleElem = document.createElement('h1')
        titleText = document.createTextNode("Main Page");
        titleElem.appendChild(titleText)
        bodyElem.appendChild(titleElem);

        listContainer = document.createElement('div');
        listElement = document.createElement('ul');
        listContainer.appendChild(listElement);

        bodyElem.appendChild(listContainer);

        for (const [key, value] of Object.entries( listData )) {
            listItem = document.createElement('li');
            titleElem = document.createElement('h3')
            titleText = document.createTextNode("Blogpost:" + value.title);
            titleElem.appendChild(titleText)
            listItem.innerHTML = "num comments: " + Object.keys( value["comments"]).length;

            var a = document.createElement('a');
            var linkText = document.createTextNode("show commets " + value.title);
            a.appendChild(linkText);
            a.href = base+'/blogspot.html?postId='+key+'&title='+value.title;

            listElement.appendChild(titleElem);
            listElement.appendChild(listItem);
            listElement.appendChild(a);
        }
    })
    .catch((err) => console.log(err))
}

listPosts();
