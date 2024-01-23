const express = require("express");
const app = express();
const methodOverride = require("method-override")
const pokemons = require("./models/pokemon");
const PORT = 8080;

//load engine
const jsxEngine = require("jsx-view-engine");

//setup engine
app.set("view engine", "jsx")
app.engine('jsx', jsxEngine())

//MIDDLEWARE
app.use(express.urlencoded({extended:true})); // format post request
app.use(methodOverride('_method'))


app.get("/",(req, res)=>{
    res.send("Welcome to Pokemon APP!!!");
})

app.get("/pokemon", (req,res)=>{
    res.render("Index", {pokemon: pokemons});
})

app.get("/pokemon/new", (req,res)=>{
    res.render("New");
})

//Create Route
app.post("/pokemon/", (req,res)=>{
    console.log(req.body)
    req.body.img = "https://img.pokemondb.net/sprites/x-y/normal/blastoise.png"
    pokemons.push(req.body)

    res.redirect("/pokemon");
})

app.get("/pokemon/:index", (req,res)=>{
    res.render("Show", {pokemon: pokemons[req.params.index]});
})

app.listen(PORT, (req,res)=>{
    console.log(`listening on Port:${PORT}`);

})
