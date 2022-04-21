const express = require("express");
const app = express();
const dotenv = require("dotenv");


const usRouter = require("./usuario/usuario_routes.js");
const paRouter = require("./paciente/paciente_router.js");
const citaRouter = require("./cita/cita_router.js");

dotenv.config();
app.use(express.json());

exports.server = app.listen(process.env.PORT, () => console.log("servidor levantado"));

app.get('/test',(req, res)=>{
    res.json({
        "clave":10,
    });
});

app.use("/pacientes", paRouter);
app.use("/usuarios", usRouter);
app.use("/citas", citaRouter);
