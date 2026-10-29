
const express = require("express")


const PORT = process.env.PORT || 7001
const app = express()





// app.use("/todo", require("./routes/toDoRoute"))
// app.use("/user",require("./routes/userRoute"))
// app.use("/photo",require("./routes/photoRoute"))
// app.use("/post",require("./routes/postRoute"))

//routes
app.get("/", (req, res) => {
    res.send("this is the home page")
})




app.listen(PORT, () => console.log(`Server running on port
${PORT}`))



