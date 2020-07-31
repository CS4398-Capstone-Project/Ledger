#!/bin/bash

pushd ./backend/api/
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver &
sleep 5
popd

pushd ./frontend/
npm start
popd
