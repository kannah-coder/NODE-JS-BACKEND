import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// To use __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log(`➡️ Request received: ${req.url}`);

  // Set file path
  let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

  // Detect file extension
  const ext = path.extname(filePath);

  // Default content type
  let contentType = "text/html";

  // Map extensions to correct MIME types
  if (ext === ".js") contentType = "text/javascript";
  else if (ext === ".css") contentType = "text/css";
  else if (ext === ".json") contentType = "application/json";
  else if (ext === ".png") contentType = "image/png";
  else if (ext === ".jpg") contentType = "image/jpeg";

  // Read and serve the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File not found → 404 response
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success → send the file
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
