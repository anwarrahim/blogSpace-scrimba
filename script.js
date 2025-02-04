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



    document.getElementById('post-form').addEventListener('submit', e=>{
        e.preventDefault()
        const postTitle = document.getElementById('post-title').value
        const postBody = document.getElementById('post-body').value
        const dataObj ={
            title: postTitle,
            body:postBody
        }
        

    
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
            method:'POST',
            body:JSON.stringify(dataObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
        
            document.getElementById('blog-content').innerHTML =
            `
            <h1>
                ${data.title}
            </h1>
               
               <p>
                ${data.body}
               </p>
               ${document.getElementById('blog-content').innerHTML}
            `

        })
       
    })
    

      

    