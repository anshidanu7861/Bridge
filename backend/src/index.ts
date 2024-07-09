import http from "http";
import { app } from "./app";

const server = http.createServer(app);

const start = async () => {
  const PORT = process.env.SERVER_PORT || 5050;

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

start();
