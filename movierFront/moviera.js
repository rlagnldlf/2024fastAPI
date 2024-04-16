let MovieObject = {
    getall: function(){

        alert("오늘의 영화추천")
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/all/"

        }).done(function(response){
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            topdiv = document.createElement("div")
            topdiv.style = 'column-count:5'
            document.body.appendChild(topdiv)

            movielist.forEach(movie=> {
                cmovie = document.createElement("div")
            cmovie.className = "card"

            mimg = document.createElement("img")
            mimg.className = "card-img-top"
            mimg.src = movie.poster_path
            mimg.onclick = function(){
                window.location.href = movie.url
            }
            mimg.mouseover = function(){
                mimg.style.cursor = "pointer"
            }
            

            cmovie.appendChild(mimg)
            topdiv.appendChild(cmovie)
            })

        }).fail();

}
}

MovieObject.getall()