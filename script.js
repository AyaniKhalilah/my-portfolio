const requesturl = "https://jsonplaceholder.typicode.com/posts";

fetch(requesturl)
    .then((response)=> (response.JSON()))
    .then((data)=>{
        data.forEach(post => {
            console.log(`ID: ${post.id}, Title: ${post.title}`);
        });
    })
    .catch((error)=>console.log("error fetching data:", error));
