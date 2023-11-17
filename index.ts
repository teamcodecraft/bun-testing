import figlet from "figlet";
const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);
        const body = figlet.textSync("Rezky Pradana!");
        if (url.pathname === "/") return new Response(body);
        if (url.pathname === "/profile") return new Response("Profile!");
        return new Response("404!");
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);