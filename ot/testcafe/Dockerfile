FROM testcafe/testcafe
# See https://github.com/DevExpress/testcafe/tree/master/docker
# We need root privileages to install new deps:
USER root
ENV LANG C.UTF-8
#COPY tests ./
#add a simple script that can auto-detect the appropriate JAVA_HOME value
# based on whether the JDK or only the JRE is installed
RUN { \
    echo '#!/bin/sh'; \
    echo 'set -e'; \
    echo; \
    echo 'dirname "$(dirname "$(readlink -f "$(which javac || which java)")")"'; \
    } > /usr/local/bin/docker-java-home \
    && chmod +x /usr/local/bin/docker-java-home
ENV JAVA_HOME /usr/lib/jvm/java-1.8-openjdk
ENV PATH $PATH:/usr/lib/jvm/java-1.8-openjdk/jre/bin:/usr/lib/jvm/java-1.8-openjdk/bin
ENV JAVA_VERSION 8u212
ENV JAVA_ALPINE_VERSION 8.242.08-r2
RUN set -x \
    && apk add --no-cache \
    openjdk8="$JAVA_ALPINE_VERSION" \
    && [ "$JAVA_HOME" = "$(docker-java-home)" ]
# EXPOSE 1337 1338
EXPOSE 5000
# run the application
CMD ["npm", "run test:chrome:headless"]
