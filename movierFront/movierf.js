let MovieObject = {
        getall: function(){

            $.ajax({
                type: "GET",
                url: "http://localhost:8000/all/"

            }).done(function(response){
                console.log(response.result)
                movielist = response.result
                console.log(movielist[0].title)

                // topdiv = document.createElement("div")
                // topdiv.style = 'column-count:5'
                // document.body.appendChild(topdiv)
                topdiv = document.getElementById('alldiv')

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

    },
        getgenres: function(genre) {

            $.ajax({
                type: "GET",
                url: "http://localhost:8000/genres/" + genre

            }).done(function(response){
                console.log(response.result)
                movielist = response.result
                console.log(movielist[0].title)

                // topdiv = document.createElement("div")
                // topdiv.style = 'column-count:5'
                // document.body.appendChild(topdiv)
                topdiv = document.getElementById('genrediv')
                // way 1 =기존의 장르 선택된 영화 지우기
                // topdiv.innerHTML = ""
                while(topdiv.firstChild){
                    topdiv.removeChild(topdiv.firstChild);
                }
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

    },
    getitems: function() {

        $.ajax({
            type: "GET",
            url: "http://localhost:8000/item-based/" + "50"

        }).done(function(response){
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            topdiv = document.getElementById('itemdiv')

            while(topdiv.firstChild){
                topdiv.removeChild(topdiv.firstChild);
            }
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

},
   
    getuser: function(){

        $.ajax({
            type: "GET",
            url: "http://localhost:8000/user-based/?" + "params=50:5"

        }).done(function(response){
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
            topdiv = document.getElementById('userdiv')

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