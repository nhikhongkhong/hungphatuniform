#!/bin/bash
# declare STRING variable
INDEX=0

for FILE in *; do 
((INDEX++)) 
mv "$FILE" "work-${INDEX}.jpg"
echo $INDEX; done