"""Statischer Entwicklungsserver.

`python3 -m http.server` scheitert hier, weil das Modul beim Start
os.getcwd() auswertet - und der Ordner liegt unter ~/Desktop, das unter
macOS TCC-geschuetzt ist. Dieses Skript setzt das Verzeichnis stattdessen
explizit anhand des eigenen Dateipfads.
"""

import os
import http.server
import socketserver

PORT = 5173
ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
        print("Serving %s at http://127.0.0.1:%d/" % (ROOT, PORT), flush=True)
        httpd.serve_forever()
