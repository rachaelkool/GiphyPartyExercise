// console.log("Let's get this party started!");
const $gifArea = $("#gif-area");


$("form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let searchTermValue = $('#searchinput').val();
    $('#searchinput').val('');
  
    
    const res = await axios.get('https://api.giphy.com/v1/gifs/search',{
            params: {
                api_key: 'L1GP5X4oHuU5bizA519EmaJYvRDPRUVi',
                q: searchTermValue
            }
    });
    appendGiphs(res.data)
})

function appendGiphs(res) {
    let nums = res.data.length;
    if (nums) {
    let randomIdx = Math.floor(Math.random() * nums);
    let $newCol = $("<div>", { class: "col-3" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

$("#remove").on("click", function() {
    $gifArea.empty();
  });
