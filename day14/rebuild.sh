IMG_NAME=node-aumanime
TAG_NAME=latest
CONTAINER_NAME=node-anime
PUB_PORT=8080

sudo docker stop $CONTAINER_NAME

sudo docker rm $CONTAINER_NAME

sudo docker build -t $IMG_NAME:$TAG_NAME . 

sudo docker run --name $CONTAINER_NAME \
        --network=network1 \
        --restart=always \
        --link mongo:db \
        -p $PUB_PORT:7774 \
        -d $IMG_NAME:$TAG_NAME

