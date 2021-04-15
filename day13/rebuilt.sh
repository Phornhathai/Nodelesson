sudo docker build -t node-day13-img:latest . 

sudo docker run --name node-day13 \
        --network=network1 \
        --restart=always \
        --link mongo:db \
        -d node-day13-img:latest
