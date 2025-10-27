#!/bin/bash
# Launch script for Jovan Blango Portfolio website
# This ensures the server always starts in the correct directory

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Change to the website directory
cd "$SCRIPT_DIR"

echo "🚀 Starting server in: $SCRIPT_DIR"
echo "📂 Serving files from: $(pwd)"
echo "🌐 Open: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the Python HTTP server
python3 -m http.server 8000
