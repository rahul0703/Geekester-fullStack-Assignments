
const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e){
    try{
        // prevent the page from reloading;
        e.preventDefault();
        console.log("Submitted");
        // console.log(form);
        const searchedShow = this.elements.query.value;
        console.log(searchedShow);
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchedShow}`);
        // console.log(res.data[0].show.image.medium);
        // const img = document.createElement("img");
        // img.src = res.data[0].show.image.medium;
        // document.body.append(img);
        addImage(res.data);
        form.elements.query.value = '';
    }catch(error){
        // alert("This TV show either does not exist or doesn't have image");
        console.log("Error Occured");
        console.log(error);
        form.elements.query.value = '';
    }
});


const addImage = function (shows) {
    for(let result of shows){
        const img = document.createElement("img");
        img.src = result.show.image.medium;
        document.body.append(img);
    }
}