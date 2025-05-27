// src/socket.ts
import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // آدرس سرور Node.js
export default socket;
