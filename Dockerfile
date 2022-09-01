FROM denoland/deno:alpine-1.25.0

COPY run.sh /
COPY /src /app/src
WORKDIR /app/src

EXPOSE 8000

CMD ["/run.sh"]