# json-to-go-map-application

This repo provides a way of running the tool https://github.com/rodrigo-brito/json-to-go-map as a containerised application and outputting
a valid golang file

Full credit goes to that author for the application code

I cobbled this together pretty quickly so if you see any improvements feel free to open an issue

## Build

Clone the repo and run

```sh
podman build -t jsontogo .
```

## Run

```sh
podman run -v "$PWD"/examples:/app/examples:Z jsontogo -- examples/input.json examples/output.go examples bestMapOfYourLife
```
