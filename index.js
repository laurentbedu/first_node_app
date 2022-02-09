const express = require("express");
// const categoryRouter = require('./api/routers/category.router');
const routers = require('./api/routers');
console.log(routers)

const app = express();

const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:3000"]
};
app.use(cors(corsOptions));

app.use(express.json());

for(let route in routers){
  app.use(`/${route}`, new routers[route]().router);
}
// app.use('/category', categoryRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
