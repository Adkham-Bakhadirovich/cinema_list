$(document).ready(()=>{
    getData()
}) 

const getData=()=>{
    var a=$('.data')
    a.html("")
    console.log(Data)
    Data.map((item, key)=>{
        a.append(`    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
        <div class="cardImg">
            <img src="${item.Images[0]}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">${item.Title}</h5>
              <h6>${item.Year}</h6>
              <p class="country">${item.Country}</p>
              <p class="director">${item.Director}</p>
              <p class="genres">${item.Genre}</p>
              
              <a onclick="getInfo(${key})" class="btn btn-primary">Info</a>
            </div>
          </div>
    </div>`)
    })
}



const openModal=()=>{
    $('#exampleModal').modal("show")
}
const getInfo=(id)=>{
   var imgs=$(".carousel-inner")
   imgs.html('')
   Data[id].Images.map((item, key)=>{
    imgs.append(`<div class="carousel-item ${key==0?"active":""}">
        <img src="${item}" class="d-block w-100" alt="...">
      </div>`)
    })
    const {Title,Year, Genre,Actors, Runtime, Country, Awards, Language, Director, Writer, Plot}=Data[id]
    $("#exampleModalLabel").html(Title)
    $('.modalData').html(` <p><b>Year:</b> ${Year}</p>
    <p><b>Genre:</b> ${Genre}</p>
    <p><b>Runtime:</b> ${Runtime}</p>
    <p><b>Country:</b> ${Country}</p>
    <p><b>Awards:</b> ${Awards}</p> 
    <p><b>Language:</b> ${Language}</p>
    <p><b>Director:</b> ${Director}</p>
    <p><b>Writer:</b> ${Writer}</p>
    <p><b>Actors:</b> ${Actors}</p>
    <p>${Plot}</p>
    `)
openModal()
}
