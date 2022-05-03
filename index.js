const express = require('express')
const app = express()
const port = 3007
const routerTaueria=require('./routes/taquerias.router');

app.use(express.json());
app.use(
  express.urlencoded({
    extended:true,
  })
);


app.use('/api/v1/taquerias',routerTaueria);

app.listen(port, () => {
  console.log(`puertot ${port}`)
})