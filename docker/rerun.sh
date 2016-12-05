docker rm -f gaga
docker run --privileged --restart=always -d --name=gaga -p 80:3000 -v /tmp:/tmp pishon/gaga







