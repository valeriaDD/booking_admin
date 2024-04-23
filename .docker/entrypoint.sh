#!/bin/bash

set -e

cd /usr/share/nginx/html/

directory="./dist/js"
filename_pattern="app.*.js"

# Use the find command to search for the file with app.*.js pattern
file_path=$(find "$directory" -name "$filename_pattern" -type f -print -quit -exec readlink -f {} \;)

if [ -n "$file_path" ]; then
  echo "File found: $file_path"
  echo "=== Set environment variables in source files located at dist/js/ ==="
  [[ -v VUE_APP_ENV ]] && sed -i "s|VUE_APP_ENV:[^,]*|VUE_APP_ENV:\"${VUE_APP_ENV}\"|g" $file_path
  [[ -v VUE_APP_NAME ]] && sed -i "s|VUE_APP_NAME:[^,]*|VUE_APP_NAME:${VUE_APP_NAME}|g" $file_path
  [[ -v VUE_APP_API_URL ]] && sed -i "s|VUE_APP_API_URL:[^,]*|VUE_APP_API_URL:\"${VUE_APP_API_URL}\"|g" $file_path
  [[ -v VUE_APP_GOOGLE_RECAPTCHA_KEY ]] && sed -i "s|VUE_APP_GOOGLE_RECAPTCHA_KEY:[^}]*|VUE_APP_GOOGLE_RECAPTCHA_KEY:\"${VUE_APP_GOOGLE_RECAPTCHA_KEY}\"|g" $file_path
else
  echo "File app.*.js not found"
fi

echo "[ DONE ]"

exec "$@"
