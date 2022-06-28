# Web Client for Terminal Chat App's Server

## How to set up the project

Clone the project

```
git clone https://github.com/pixalquarks/TerminalChatApp-WebClient.git
```

Install the dependencies

```
npm i
```

## How to run the project

## Setting up Envoy

Because web doesn't support gRPC directly, we need to run an envoy proxy to communicate to the server.

We need Docker running for this.

```
docker compose up
```

All envoy configurations can be found in envoy.yml. Make sure to configure the ports (both for the server and for the one expored to web front-end).

Run `npm start` in project directory

```
npm start
```
