#!/bin/bash

# Traverse all directories starting from the repository root
# Find files with specific extensions that contain underscores in their names
# Rename them by replacing "_" with "-"

repo_root="."  # you can change this if you want to point to another folder

find "$repo_root" -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" -o -name "*.pdf" -o -name "*.txt" \) | while read -r file; do
  dir=$(dirname "$file")
  base=$(basename "$file")

  if [[ "$base" == *"_"* ]]; then
    new_base=$(echo "$base" | sed 's/_/-/g')
    new_file="$dir/$new_base"

    echo "Renaming: $file -> $new_file"
    mv "$file" "$new_file"
  fi
done
