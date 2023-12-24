import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

let post1 = {
    author:"A1",
    title:"Title1",
    post:"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.Teachers and coaches implicitly told us the returns were linear. 'You get out,' I heard a thousand times, 'what you put in.' They meant well, but this is rarely true. If your product is only half as good as your competitor's, you don't get half as many customers. You get no customers, and you go out of business."
}

let post2 = {
    author:"A2",
    title:"Title2",
    post:"The most obvious case of superlinear returns is when you're working on something that grows exponentially. For example, growing bacterial cultures. When they grow at all, they grow exponentially. But they're tricky to grow. Which means the difference in outcome between someone who's adept at it and someone who's not is very great."
}

var post_arr = [];
post_arr.push(post1);
post_arr.push(post2);


app.use(express.static("public"));

app.listen(port, ()=>
{
    console.log('server is running on port ',port);
    
})

app.get("/", (req,res) => {
    res.render("index.ejs",{post_arr : post_arr})
}
);

app.get("/create", (req,res) => res.render("create.ejs")
);

app.use(bodyParser.urlencoded({extended:true}))

app.post("/edit", (req,res) => 
{
    let index =  arr_index(req.body);
    if(index != null)
    {
        res.render("edit.ejs",{post_arr : post_arr[index]})
        post_arr.splice(index, 1)

    }
    else
    res.render("index.ejs",{post_arr : post_arr})
}
);


app.post("/delete", (req,res) => 
{
    let index =  arr_index(req.body);
    if(index != null)
    {
        post_arr.splice(index, 1)
    }
    res.render("index.ejs",{post_arr : post_arr})
}
);

app.post("/submit", (req,res)=>
{
    console.log(req.body);
    post_arr.push(req.body);
    res.render("index.ejs",{post_arr : post_arr});
}
);

app.post("/view", (req,res) => 
{  
    let index =  arr_index(req.body);
    res.render("index.ejs", {index : index, post_arr : post_arr});
} 
);

function arr_index(reqbody)
{
    for(let i = 0; i < post_arr.length; i++)
    {
        if(post_arr[i].title === reqbody.formobj)
        {
            return i;
        }
    }
    return null;
}