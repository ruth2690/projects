

const documentaries=[
    {
      
        img:"https://pics.filmaffinity.com/world_war_ii_from_the_frontlines-510911490-large.jpg",
        size: 40000
    },
    {
       
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7PPKdB7BCWGnqI6IvfPdnd1AEzYWMlo9Dw&s",
        size:40000
    },
    {
         
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElbgyxy9fUwiBmmaEHJjJ7fFl0LhwwBOgxA&s",
        size:40000
    },
    { 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdukrVNc2Fl05xCvh6HygRC8XTBCbyeac2Pg&s",
        size:40000

    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxg_gTO3MHDELXDra8ZEVKneXS4O9KSV2QQ&s",
        size:40000

    }
]
const comedy=[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIyTJEYI4k4kJTw1FC5lkhWgBAj67xMtVuw&s",
        size:40000

    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXkb5DyjhLirN_JrRkk8NMFmjGLMJM32vUA&s",
        size:40000


    },
    {
        img:"https://www.tvguide.com/a/img/catalog/provider/1/2/1-6039887713.jpg",
        size:40000

    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyz-WUMgu5LB9RBuGc3mybeA0PvqaYiZWP7g&s",

        size:40000


    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kZSxQXmS9uTufS0ul2AWK-n2bwliglhGOA&s",
        size:40000

    }
]
console.log(documentaries)


const mainDiv_1=document.getElementById("main_1")
documentaries.forEach(function(c)
{ 
    const divv=document.createElement("div")
    divv.classList.add("docuseries")
    divv.classList.add("img-thumbnail")

    const img=document.createElement('img')
    img.src =  c.img
    divv.append(img)
   
    mainDiv_1.appendChild(divv)
})
console.log(comedy)
const mainDiv_2=document.getElementById("main_2")

comedy.forEach(function(c)
{ 
    const divv=document.createElement("div")
    divv.classList.add("comedies")
    divv.classList.add("img-thumbnail")
    const img=document.createElement('img')
    img.src =  c.img
    divv.append(img)
   
    mainDiv_2.appendChild(divv)
})