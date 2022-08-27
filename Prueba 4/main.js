
let list = document.getElementById("movies");

async function getMovieTitles(title) {
    const url = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${title}`
    const res = await fetch(url)
    const json = await res.json()
    const data = json.data.map(item => item.Title).sort()
    
    data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
    return data.sort()
}

getMovieTitles('Spiderman')