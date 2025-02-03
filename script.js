

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        let sortData = data.slice(0,5)
        let html = ""
        for(let post of sortData){
            html += `
            <h1>
                ${post.title}
            </h1>
               
               <p>
                ${post.body}
               </p>
            `
        }
        document.getElementById('blog-content').innerHTML = html
    })
    

    