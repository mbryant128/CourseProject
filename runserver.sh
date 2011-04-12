#!/bin/bash

# A script to start the server in a UNIX environment. 
# Usage: ./runserver.sh <port>
#     OR:  ./runserver.sh --clean
# To start the server without using this script, use:
# $ node js/dispatcher.js <port>
# (src MUST be the working directory)

if [ $# -ne 1 ]
then
    echo "Usage: $0 --clean"
    echo "OR     $0 <port>"
    exit 1
fi

cd src

if [ $1 == "--clean" ]
then
    echo "removing src/db/ and node-sqlite build files..."
    rm -v -rf db
    rm -v lib/node-sqlite/sqlite3_bindings.node
    rm -v -rf lib/node-sqlite/build
    rm -v -rf lib/node-sqlite/deps/mpool-2.1.0/*.a
    rm -v -rf lib/node-sqlite/deps/mpool-2.1.0/*.o
    rm -v lib/node-sqlite/.lock-wscript
else
    cd ..
   ./initbuild.sh
   cd src
    node js/dispatcher.js $1
fi
