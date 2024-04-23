FROM nginx:1.21.6-alpine

RUN apk update && apk add --no-cache gnupg \
    curl \
    wget \
    git \
    ca-certificates \
    libtool \
    libpng-dev \
    supervisor \
    nodejs\
    npm \
    vim \
    findutils \
    openssl \
    && update-ca-certificates --fresh

# Add Nginx configuration file for backend
COPY .docker/config/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy Supervisor settings
COPY .docker/config/supervisor/supervisor.ini /etc/supervisor.d/

# Configure ssl and Generate keys for https
RUN mkdir /keys
RUN openssl req -newkey rsa:2048 -nodes -subj '/O=Bookit App/CN=localhost' \
    -keyout /keys/bookit.app.key -x509 -days 365 -out /keys/bookit.app.crt

# Setup entrypoint
COPY .docker/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Remove default html folder and create application folder
RUN rm -r /usr/share/nginx/html && mkdir -p /usr/share/nginx/html/

# Copy project source
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Install app-level dependencies
RUN npm install -g @vue/cli
RUN npm install --unsafe-perm

RUN npm run build

EXPOSE 80 443

ENTRYPOINT ["entrypoint.sh"]

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
