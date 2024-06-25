<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624085615 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649C5B765A9');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64928E913E7');
        $this->addSql('ALTER TABLE user_favorite_games DROP FOREIGN KEY FK_222EDF4C4D77E7D8');
        $this->addSql('ALTER TABLE user_favorite_studios DROP FOREIGN KEY FK_19071E0681F17E9A');
        $this->addSql('DROP TABLE user_fav_games');
        $this->addSql('DROP TABLE user_fav_studios');
        $this->addSql('DROP TABLE user_favorite_games');
        $this->addSql('DROP TABLE user_favorite_studios');
        $this->addSql('DROP INDEX IDX_8D93D64928E913E7 ON user');
        $this->addSql('DROP INDEX IDX_8D93D649C5B765A9 ON user');
        $this->addSql('ALTER TABLE user DROP user_favorite_games_id, DROP user_favorite_studios_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_fav_games (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_fav_studios (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_favorite_games (id INT AUTO_INCREMENT NOT NULL, game_id_id INT DEFAULT NULL, INDEX IDX_222EDF4C4D77E7D8 (game_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_favorite_studios (id INT AUTO_INCREMENT NOT NULL, studio_id_id INT DEFAULT NULL, INDEX IDX_19071E0681F17E9A (studio_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE user_favorite_games ADD CONSTRAINT FK_222EDF4C4D77E7D8 FOREIGN KEY (game_id_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE user_favorite_studios ADD CONSTRAINT FK_19071E0681F17E9A FOREIGN KEY (studio_id_id) REFERENCES studio (id)');
        $this->addSql('ALTER TABLE user ADD user_favorite_games_id INT DEFAULT NULL, ADD user_favorite_studios_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64928E913E7 FOREIGN KEY (user_favorite_studios_id) REFERENCES user_favorite_studios (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649C5B765A9 FOREIGN KEY (user_favorite_games_id) REFERENCES user_favorite_games (id)');
        $this->addSql('CREATE INDEX IDX_8D93D64928E913E7 ON user (user_favorite_studios_id)');
        $this->addSql('CREATE INDEX IDX_8D93D649C5B765A9 ON user (user_favorite_games_id)');
    }
}
