
const base = 'http://localhost:3000';


function  blogPost() {
    var urlString = window.location.href
    var url = new URL(urlString);
    var postId = url.searchParams.get("postId");
    var title = url.searchParams.get("title");
    console.log(postId);
    fetch(base+'/comments/'+ postId)
        .then((res) => res.json() )
        .then(( listData ) => {

            bodyElem = document.getElementsByTagName('body')[0]
            titleElem = document.createElement('h1')
            titleText = document.createTextNode("All comments of Blogpost "+ title);
            titleElem.appendChild(titleText)
            bodyElem.appendChild(titleElem);

            listContainer = document.createElement('div');
            listElement = document.createElement('ul');
            listContainer.appendChild(listElement);

            bodyElem.appendChild(listContainer);

            for (const [key, value] of Object.entries( listData )) {
                listItem = document.createElement('li');
                listItem.innerHTML = 'name: '+ value.name + ' -  text:' +  value.text;
                listElement.appendChild(listItem);   
            }
            var a = document.createElement('a');
            var linkText = document.createTextNode("All Posts");
            a.appendChild(linkText);
            a.href = base;
            listContainer.appendChild(a);

        })
        .catch((err) => console.log(err))                    
}



blogPost();
