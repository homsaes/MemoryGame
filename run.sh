#!/bin/sh

deno bundle ./client.tsx > ./frontend/static/bundle.js && deno run -A server.ts