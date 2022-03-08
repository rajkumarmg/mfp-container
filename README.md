## setup instruction
To start dev environment, please run,

```
sudo npm start
```

To build for production, please run

```
sudo npm run build
```

To build docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.dev -t mfp-container-image .
```

To start a development container, please run

```
sudo docker container run -d -p 8080:8080 --name mfp-container mfp-container-image
```

To bash into to the container, please use

```
 sudo docker exec -it mfp-container bash
```
