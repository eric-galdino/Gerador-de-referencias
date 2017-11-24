var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var referencias = [];

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/" + "geradorDeReferencias.html");
});

app.get("/list.html", function(req, res) {
  res.end(JSON.stringify(referencias));
});

app.post("/gerarReferencia", function(req, res) {
  // Envia resposta em formato JSON
  response = {
    "primeiro_nome": req.body.primeiro_nome,
    "ultimo_nome": req.body.ultimo_nome,
    "titulo_trabalho": req.body.titulo_trabalho,
    "evento": req.body.evento,
    "numero_evento": req.body.numero_evento,
    "ano": req.body.ano,
    "cidade": req.body.cidade,
    "titulo_documento": req.body.titulo_documento,
    "local_publicacao": req.body.local_publicacao,
    "editora": req.body.editora,
    "data_publicacao": req.body.data_publicacao,
    "pagina_inicial": req.body.pagina_inicial,
    "pagina_final": req.body.pagina_final
  };

  referencias.push(response);
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  console.log("Servidor rodando em http://127.0.0.1:8081/");
});
