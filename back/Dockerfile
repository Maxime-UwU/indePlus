# Utiliser une image PHP 8.2 avec Apache
FROM php:8.2-apache

# Installer les dépendances système nécessaires et PHP extensions
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libpq-dev \
    git \
    unzip \
    libsodium-dev \
    && docker-php-ext-install intl pdo pdo_pgsql sodium \
    && apt-get clean

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# Configurer Apache
RUN a2enmod rewrite
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

# Définir l'entrée du conteneur
CMD ["apache2-foreground"]






