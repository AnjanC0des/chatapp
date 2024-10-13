import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { recipientList, messages } from "./ServerState.js";

const app = express();
const httpServer = createServer(app);
const allchats = { ...messages };
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("fetch_recipients", () => {
    console.log("recieved fetch recipients request.");
    socket.emit("recieve_recipients", recipientList);
  });

  socket.on("fetch_chats", (recipient) => {
    let messages = allchats[recipient];
    socket.emit("receive_chats", messages);
  });

  socket.on("send_message", (message) => {
    const sender = message.sender;
    let messages = allchats[sender];
    messages = [...messages, message];
    allchats[sender] = messages;
    socket.emit("new_message", message);
  });

  setInterval(() => {
    const message = {
      id: "909",
      sender: "1",
      content: "This seems to be working for now.",
    };
    socket.emit("new_message", message);
  }, 5000);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(5137, () => {
  console.log("Server is running on port 5137");
});
