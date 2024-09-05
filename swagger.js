const swaggerJsdoc = require("swagger-jsdoc"); 
const swaggerUi = require("swagger-ui-express");

// Metadata info about our API

const options = {
    definition: {
        openapi: "1.0.0",
        info: {title: 'Plantilla MVC Carga de Archivos On Premise Base de datos', version: '1.0'} 
        },
    apis: ["router.js", "models/entityTeleredRecargas"]    
    };

// Docs JSON Format 
const swaggerSpec = swaggerJsdoc(options);

// Funtion to setup our docs
const swaggerDocs = (app, port) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(
        'Version 1 Docs are available at http://localhost:${port}/api/docs'
    );
};

module.exports = {swaggerDocs};

