#!/bin/bash

pushd ./backend/api
pip3 install -r requirements.txt
popd

pushd ./frontend
npm install
popd
