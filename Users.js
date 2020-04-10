users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
]


function userLanguages(list){
    for(i = 0; i < list.length; i++) {
        first_n = list[i]["first_name"]
        last_n = list[i]["last_name"]
        console.log("first_name - " +first_n+", last_name - "+last_n)
    }
}

function userLanguages(arr){
    for(i = 0; i < arr.length; i++){
        console.log(arr[i].fname + " " + arr[i].lname + " knows " + arr[i].languages + ".");
        return(arr[i].fname + " " + arr[i].lname + " knows " + arr[i].languages + ".")
    }
}

  