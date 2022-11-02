const backDrop = document.getElementById("warning_backdrop");
const warningBox = document.getElementById("warning-box");
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");


const arrOfMovies = [];

function closeModal(){
    backDrop.style.display = "none";
    warningBox.style.display = "none"
};

function openModal(){
    backDrop.style.display = "block";
    warningBox.style.display = "block"
};

// backDrop.addEventListener("click", closeModal);


const renderMovies = (filter = "") => {
      const movieList = document.getElementById("movie-list");

      if(arrOfMovies.length === 0){
                  return movieList.classList.remove("visible");
      } else{
            movieList.classList.add("visible");
      }

      movieList.innerHTML = ``; 

      const filteredMovies = !filter ? arrOfMovies : arrOfMovies.filter(movie => movie.info.title.includes(filter)

      )

      filteredMovies.forEach((movie) => {
            const movieEl = document.createElement("li");
            const {info, ...otherProps} = movie;
            console.log(otherProps);
            // const { title: movieTitle } = info;]
            let { getFormattedTitle } = movie;
            // getFormattedTitle = getFormattedTitle.call(movie);
            let text = getFormattedTitle.call(movie) + ' - ';
            for(const key in info){
                  if(key !== "title" && key !== "_title"){
                              text = text + `${key}: ${movie.info[key]}`;
                  }
            }
            movieEl.textContent = text;
            movieList.append(movieEl);
      })
}


const displayMovie = () => {
            const title = document.getElementById("title").value;
            const extraName = document.getElementById("extra-name").value;
            const extraValue = document.getElementById("extra-value").value;

             if( extraName.trim() === ""|| extraValue.trim() === ""){
                        // backDrop.style.display = "block";
                        // warningBox.style.display = "block"
                        openModal();
                        return
                  };
             
                  const movieId = {
                    info: {
                          set title(val){
                                if(val.trim() === ""){
                                      this._title = "DEFAULT";
                                      return;
                                }
                                this._title = val;
                          },
                          get title(){
                                return this._title.toUpperCase();
                          },
                          [extraName]:  extraValue
                    },
                    id: Math.random(),
                    getFormattedTitle(){
                          console.log(this);
                        return this.info.title.toUpperCase();
                  }
              };
              movieId.info.title = title; 
              console.log(movieId.info.title);
              arrOfMovies.push(movieId);
              renderMovies();
}


      
            
const searchMovieHandler = function() {
                  console.log(this);
                  const filterTerm = document.getElementById("filter-title").value;  
                  renderMovies(filterTerm); 
};



searchBtn.addEventListener("click", searchMovieHandler);
addMovieBtn.addEventListener("click", displayMovie);
backDrop.addEventListener("click", closeModal);


const person = {name: "jizzy", age: 40, hobbies: ["coding", "reading"]};

const person2 = {...person};

// person.hobbies.push("cooking")

const person3 = {...person, name: "lekan", hobbies: [...person.hobbies]}

person.age = 55;

console.log(person2);
console.log(person);
console.log(person3);

let anotherPerson = Object.assign({}, person);

console.log(anotherPerson);

anotherPerson = {...person2, name: 'lukman'};

console.log(anotherPerson);


let title = "JavaScript";
const extraNameSake = "Openiyi";
let extraValueCode = 0.88;


const videoId = {
      bioCode: [2, 44, 40.9, 77],

      info: {
            title,
            [extraNameSake]:  extraValueCode
      },
      id: Math.random()
}; 


const {info} = videoId;

console.log(info);

const rapper = {name: "usman", nick: "ice-prince"};

if("name" in rapper){
            console.log("affirmative");
} else {
      alert("Not Found");
}

const portfolio = {name: "nick", 
                   age: 30,
                   job: ["professor", "teacher"],
                   getHobbies(){
                        return this.job.forEach(p => {
                              console.log(p + "-" + this.name)
                        })
}}

portfolio.getHobbies();


function vowelCount(str) {
     
      const vowels = ["a", "e", "i", "o", "u"];
      const checked = [];
      let count = 0;

      // for(let key of str){
      //       if(vowels.includes(key) && !checked.includes(key)){
      //             checked.push(key);
      //             count++;
      //       }
      // }
      for(let i = 0; i < str.length; i++){
            vowels.forEach(p => {
                  if(p.includes(str[i]) && !checked.includes(str[i])){
                        checked.push(i);
                        count++;
                  }
      })
      }

      console.log(count);
      console.log(checked);
      return [count, checked];
}

console.log(vowelCount("she wants to chill with the big boys"));


