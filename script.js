const container = document.querySelector('.container');

let pageCount = 1;
const limit = 4;

const getImages = async ()=>{
    const response = await fetch(`https://picsum.photos/v2/list?page=${pageCount}&limit=${limit}`);
    const data = await response.json();
    //console.log(data);
    data.map((currElem)=>{
        const htmlData = `
        <div class="card">
            <img src="${currElem.download_url}" alt="Alejandro Escamilla" class="displayImage">
            <div class="card-body"> 
                <p class="author">${currElem.author}</p>
            </div>
            
        </div>`;
        container.insertAdjacentHTML('beforeend',htmlData);
        })
}

const getMoreImages = ()=>{
    setTimeout(()=>{
        pageCount++;
        getImages();

    },500)
}
getImages();

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight ){
        getMoreImages();
    }
})