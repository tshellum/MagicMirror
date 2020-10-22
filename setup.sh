#!/usr/bin/env bash

topdir=$(pwd)

cd modules

git clone https://github.com/Springvar/MMM-AtbSanntid.git
git clone https://github.com/YR/MMM-YrNow
git clone https://github.com/fmandal/MMM-YrThen
git clone https://github.com/CatoAntonsen/MMM-Ruter.git
# cd MMM-Ruter
# npm install

cd ${topdir}
npm install


