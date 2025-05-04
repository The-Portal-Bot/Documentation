---
id: deployment
title: Deployment
sidebar_label: Deployment
---

#### In case you want to run Portal with terminal (ex. tmux)



1.  Setup mongo db either locally or in docker and add routes to env

2.  Go to Portal directory

        ```bash
        cd Portal
        ```

3.  Run Portal

        ```bash
        deno run --allow-net --allow-read --allow-env --allow-write --allow-ffi --allow-run --allow-sys src/app.ts
        ```
