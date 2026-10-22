import http.server
import socketserver
import mimetypes

PORT = 3000

# Explicitly ensure clean MIME types across Windows systems
mimetypes.init()
mimetypes.add_type("text/csv", ".csv")
mimetypes.add_type("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".xlsx")
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable security headers and prevent download MIME sniffing
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"ProofBeforePurchase server running at http://localhost:{PORT}/ with explicit text/csv MIME headers.")
        httpd.serve_forever()
