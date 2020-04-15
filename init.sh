#!/bin/sh
adonis key:generate
adonis migration:run --force
if [ $DOCKER_NODE_ENV = "development" ]
then
adonis serve --dev --debug
else
adonis serve
fi
exec "$@"
