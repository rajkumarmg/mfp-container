## setup instruction

### To start dev env in windows, please follow the below steps on Windows Cmd or Bash CLI

Assuming you already have nodejs installed. Also the mfp-user and mfp-auth must be started and running with `npm start` command at `http://localhost:8084` and `http://localhost:8082` respectively.

Run the following command one by one.
```
git clone https://github.com/rajkumarmg/mfp-container.git
cd mfp-container
npm i
npm start
```
Once started try accessing http://localhost:8080 in Google Chrome.

### To start dev environment in linux, please run,

```
sudo npm start
```

To build for production, please run

```
sudo npm run build
```

To build dev docker image, please use the following command

```
sudo docker build -f ./Dockerfile.dev -t mfp-container-image-dev .
```

To build prod docker image, please use the following command

```
sudo docker build -f ./Dockerfile.prod -t mfp-container-image-prod .
```

To start a development container, please run

```
sudo docker container run -d -e HOST_IP=192.168.0.12 -p 8080:8080 --name mfp-container-dev mfp-container-image-dev
```
Please correct the value for the HOST_IP to your host ip.

To start a prod container, please run

```
sudo docker container run -d -e HOST_IP=192.168.0.12 -p 8080:80 --name mfp-container-prod mfp-container-image-prod
```
Please correct the value for the HOST_IP to your host ip.

To bash into to the container, please use

```
 sudo docker exec -it mfp-container-dev bash
```
To stop the dev container, use,

```
sudo docker container stop mfp-container-dev
```

To remove the dev container, use,

```
sudo docker container rm mfp-container-dev
```

To remove the dev image, use,

```
sudo docker image rm mfp-container-image-dev
```