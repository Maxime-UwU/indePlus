# Utiliser une image PHP 8.2
FROM php:8.2-fpm

# Définir le répertoire de travail
WORKDIR /var/www/html

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

# Copier les fichiers composer.json et composer.lock
COPY composer.json composer.lock ./

# Installer les dépendances
RUN composer install --no-scripts --no-autoloader

# Copier le reste de l'application backend
COPY . .

# Exposer le port de l'application si nécessaire
# EXPOSE 8080

# Démarrer l'application backend
CMD ["php-fpm"]

