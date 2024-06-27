# Utiliser une image PHP 8.2
FROM php:8.2-cli

# Installer les dépendances système nécessaires
RUN apt-get update && \
    apt-get install -y \
        git \
        unzip \
        libpq-dev \
        libzip-dev \
        zip \
        && docker-php-ext-install pdo pdo_mysql zip

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier les fichiers composer.json et composer.lock
COPY composer.json composer.lock ./

# Installer les dépendances
RUN composer install --no-scripts --no-autoloader

# Copier le reste de l'application backend
COPY . .
RUN cp .fly/FlySymfonyRuntime.php /var/www/html/src/FlySymfonyRuntime.php

# Compiler les assets (le cas échéant)
RUN composer dump-autoload --optimize

# Exposer le port de l'application si nécessaire
EXPOSE 8080

# Démarrer l'application backend
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
