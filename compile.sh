#!/bin/bash

compass compile .

ls *.haml|xargs -n1 -I{} haml "{}" `basename {} .html`
cd speakers
ls *.haml|xargs -n1 -I{} haml "{}" `basename {} .html`
cd -