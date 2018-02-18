#!/bin/sh

rm -r docs || true
mv dist docs
echo "Generated deployable pages"
