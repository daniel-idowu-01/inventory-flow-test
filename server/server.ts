import app from "./app";
import getServerPort from "./utils/getServerPort";


const server = app;

/* const port = getServerPort(); */

server.listen(3000, () => {
  console.log(
    `Server up and running, listening on http://localhost:3000`
  );
});

export default server;
