---
id: build
title: Build
sidebar_label: Build
---

### docker-compose

1.  Go to Portal directory

        ```bash
        cd Portal
        ```

2.  Create Portal image and download mongo image

        ```bash
        docker-compose build
        ```

3.  Check if everything went well

        ```bash
        docker images

        REPOSITORY               TAG       IMAGE ID       CREATED          SIZE
        keybraker/portal         latest    3ad539add3b7   13 seconds ago   441MB
        mongo                    5.0       54bcd8da3ea5   3 months ago     493MB
        ```

---

### standalone docker container

:::caution

Creating a standalone Portal container means that you have to
provide your own mongo database, if you do not know how to it
better use [docker-compose](/docs/hosting/docker/build/#portal-docker)

:::

1.  build Portal

        ```bash
        docker build . -f docker/Dockerfile -t portal
        ```

2.  Check if everything went well

        ```bash
        docker images

        REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
        portal       latest    4cfb856dc61d   15 minutes ago   1.27GB
        ```
