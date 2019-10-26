# Node.js example

This directory contains an example for running Node.js in Graphene, including
the Makefile and a template for generating the manifest. The application is
tested on Ubuntu 18.04, with both normal Linux and SGX platforms.

# Generating the manifest

## Building for Linux

```
make
```

## Building for SGX

```
make SGX=1
make SGX=1 sgx-tokens
```

# Running Node.js with Graphene

Here's an example of running Node.js scripts under Graphene:

Without SGX:
```
./pal_loader nodejs.manifest scripts/helloworld.js
./pal_loader nodejs.manifest scripts/express_server.js 8080
```

With SGX:
```
SGX=1 ./pal_loader nodejs.manifest.sgx scripts/helloworld.js
SGX=1 ./pal_loader nodejs.manifest.sgx scripts/express_server.js 8080
```

