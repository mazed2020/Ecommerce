import express from 'express';

const app = express();


/*+++++++++++++++basic configaration start here+++++++++++++++++ */
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));
//json body limit accept
app.use(express.json({limit:'16kb'}));
// request for url
app.use(express.urlencoded({
    extended:true,
    limit:'16kb',
}));
//uploaded file will be store the folder
app.use(express.static("public"));
app.use(cookiesParser());

 



export default app;