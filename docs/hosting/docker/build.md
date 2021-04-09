---
id: build
title: Build
sidebar_label: Build
---

### docker-compose

1.  Go to Portal directory

        $ cd Portal

2.  Create Portal image and download mongo image

        $ docker-compose build

3.  Check if everything went well

        $ docker images

        REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
        portal       latest    4cfb856dc61d   2 minutes ago   1.27GB
        node         14        e2885a998904   5 minutes ago    943MB
        mongo        4.4.3     ca8e14b1fda6   4 minutes ago    493MB

---

### standalone docker container

:::caution

Creating a standalone Portal container means that you have to
provide your own mongo database, if you do not know how to it
better use [docker-compose](/docs/hosting/docker/build/#portal-docker)

:::

1.  build Portal

        $ docker build . -f docker/Dockerfile -t portal

2.  Check if everything went well

        $ docker images
        REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
        portal       latest    4cfb856dc61d   15 minutes ago   1.27GB
