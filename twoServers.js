const http = require("http");
const PORT0 = 7000;
const PORT1 = 7500;
function handleReqNice(request, response) {
    response.end("You're a beautiful Human");
}
function handleReqMean(request, response) {
    response.end("You're tacky and I hate you");
}
let server0 = http.createServer(handleReqNice);
let server1 = http.createServer(handleReqMean);
server0.listen(PORT0, function () {
    console.log("server listening on localhost:" + PORT0);
})
server1.listen(PORT1, function () {
    console.log("server listening on localhost:" + PORT1);
})