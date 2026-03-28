import { createClient } from "redis";
import { app } from "./app";

async function bootstrap() {
    try {
        // 1. Init DB
        // await connectDB()

        // 2. Init Redis
        // await redis.connect()

        // 3. Init Event System
        // initEventSystem()

        // 4. Init Queues
        // initQueues()

        // 5. Start Workers
        // startWorkers()

        // 6. Start Server
        const server = app.listen(3000)

        // 7. Attach WebSocket
        // initWebSocket(server)

    } catch (err) {
        // log + exit
    }
}

bootstrap()