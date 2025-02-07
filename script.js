let postArr = []
const titleInput = document.getElementById('post-title')
const bodyInput = document.getElementById('post-body')
const form = document.getElementById('post-form')
  


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        postArr = data.slice(0,5)

       renderPost()
    })

    document.getElementById('post-form').addEventListener('submit', e=>{
        e.preventDefault()
        const postTitle = titleInput.value
        const postBody = bodyInput.value
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

        postArr.unshift(data)
       
        renderPost()
        form.reset()
        
        })
       
    })


    function renderPost(){
    let html = ""
        for(let post of postArr){
            html += `
            <h1>
                ${post.title}
            </h1>
               
               <p>
                ${post.body}
               </p>
            `
        }
    return document.getElementById('blog-content').innerHTML = html
}
    

      

    