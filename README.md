# Sample Gateway
Sample Gateway and Server for Edge or IOT Gateway demonstration.
This Sample does not contain any error handling and is intended to be used only in the defined way.

## Getting started

### Prerequisites

To run the Gateway and the Server you need node.js on your system. While developing this project, Version 8.10.0 was used.

### Installation

Just download or clone this repository onto your system.

## Running the System

### Run Server

Per default, the server and gateway are intended to be run on the same system.

To start the server change into the folder `server` and start the server with

```
node index.js
```

### Run Gateway

To start the gateway change into the folder `gateway` and start the gateway with

```
node index.js
```

### Run Client

Open the Browser, type `http://127.0.0.1:4001/` into the address bar and press enter. The browser should show now a text field where you can type a text. When you then press enter the text is sent to the gateway, where the number of characters are calculated and sent to the server. On the console where you started the server you should see now the length of the given text.

