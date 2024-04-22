# Docker

#### Step-by-step installation guide<br>
> https://docs.docker.com/engine/install/ubuntu/
<br>

####
Create a _docker_ group so that commands can be launched without `sudo`:<br>
```console
sudo groupadd docker
sudo usermod -aG docker <username>
newgrp docker
```
> `<username>`: username of the current machine<br>

> [!IMPORTANT]
> Restart the machine to make the changes effective.
<br>

#### Build an image from a Dockerfile <br>
```console
docker build . --tag <image_name>
```
<br>

#### List all containers<br>
```console
docker ps --all
```
<br>

#### List images<br>
```console
docker images
```
<br>

#### Connection to X server (useful for GUI)<br>
```console
xhost +si:localuser:root
docker run -it --gpus all --privileged --runtime nvidia -e DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-unix <repo_name>:<repo_tag>
```

> `-it`: i=interactive; t=terminal\
> `--gpus all`: indicates using all available GPUs in the system\
> `--privileged`: allows the container to access all underlying devices\
> `--runtime nvidia`: specifies the use of NVIDIA Container Runtime\
> `-e DISPLAY`: set environment variable DISPLAY\
> `-v /tmp/.X11-unix/:/tmp/.X11-unix`: mounts the host system's X11 socket in the container


<br>


#### Start and execution<br>
```console
docker start <container_name>
docker exec -it --privileged -e DISPLAY <container_name> bash
```
<br>

#### Stop<br>
```console
docker stop <container_name>
```
<br>

#### Push an image on Docker Hub<br>
```console
docker login
docker commit <my_container> <username>/<my_image>:<tag>
docker push <username>/<my_image>:<tag>
```

> docker tag stereolabs/zed:4.0-gl-devel-cuda11.4-ubuntu20.04 nicola16/zed_aruco:v1<br>
> docker push nicola16/zed_aruco:v1
<br>

#### Delete a container
```console
docker rm <container_id>
```
<br>

#### Delete an image
```console
docker rmi <image_id>
```
> `<image_id>` can be replaced by <image_name>
<br>

#### Rename an image
```console
docker rename <image_name> <new_image_name>
```

<br>

---

## How to save current container status
The current state of a container can be saved with the following commands. An image will be created with which it can be loaded onto a new machine using the `load` command

#### Container commit
Creates an image of the current state of the container:<br>
```console
docker commit <container_name> <image_name>:<tag>
```
> `<container_name>`: specify the name or ID of the container you wish to save<br>
> `<image_name>:\<tag>`: specifies the name and tag you want to assign to the new image
<br>

#### Save image to disk
```console
docker save -o <file_name>.tar <image_name>:<tag>
```
> `<file_name>.tar`: specifies the name of the tarball file in which you want to save the image<br>
> `<image_name>:\<tag>`: specifies the name and tag of the image you got from the previous step
<br>

#### Import image from tarball file
Loads the previously saved image:<br>
```console
docker load -i <file_name>.tar
```
---

## Copy files

- Copy a local file into container
```docker
docker cp <path_file_to_copy> <container_name>:<destination_path>
```

- Copy files from container to local path
```docker
docker cp <container_name>:<path_file_to_copy> <destination_path>
```

---

## Example
```console
xhost +si:localuser:root
docker run -it --gpus all --privileged --runtime nvidia -e DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-unix stereolabs/zed:4.0-gl-devel-cuda11.4-ubuntu20.04
docker start yolo_test
xhost +si:localuser:root
docker exec -it --privileged -e DISPLAY yolo_test bash
```
<br>

## NVIDIA example
```console
sudo docker run --rm --runtime=nvidia --gpus all nvidia/cuda:12.2.0-devel-ubuntu22.04 nvidia-smi
```
