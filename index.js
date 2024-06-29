const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const api_key = 'I_-gpFdBkSLn_eOqWFbhSeDSHTLIrjvv-v-R1hCENb0';
let page =1;
async function searchImages(){
    let keyword = searchBox.value;
    const api_url = `https://api.unsplash.com/search/photos/?client_id=${api_key}&query=${keyword}&page=${page}&per_page=9`;
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    const results = data.results;
    if(page===1)
        {
            searchResult.innerHTML = "";
        }
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

