<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624092502 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649C5B765A9');
        $this->addSql('CREATE TABLE user_game (user_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_59AA7D45A76ED395 (user_id), INDEX IDX_59AA7D45E48FD905 (game_id), PRIMARY KEY(user_id, game_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_game ADD CONSTRAINT FK_59AA7D45A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_game ADD CONSTRAINT FK_59AA7D45E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_fav_games DROP FOREIGN KEY FK_9EB0425EE48FD905');
        $this->addSql('ALTER TABLE user_fav_studios DROP FOREIGN KEY FK_EF4D3DB2446F285F');
        $this->addSql('ALTER TABLE user_favorite_studios_studio DROP FOREIGN KEY FK_762572E128E913E7');
        $this->addSql('ALTER TABLE user_favorite_studios_studio DROP FOREIGN KEY FK_762572E1446F285F');
        $this->addSql('ALTER TABLE user_favorite_studios_user DROP FOREIGN KEY FK_717FCCC328E913E7');
        $this->addSql('ALTER TABLE user_favorite_studios_user DROP FOREIGN KEY FK_717FCCC3A76ED395');
        $this->addSql('DROP TABLE user_fav_games');
        $this->addSql('DROP TABLE user_fav_studios');
        $this->addSql('DROP TABLE user_favorite_games');
        $this->addSql('DROP TABLE user_favorite_studios');
        $this->addSql('DROP TABLE user_favorite_studios_studio');
        $this->addSql('DROP TABLE user_favorite_studios_user');
        $this->addSql('DROP INDEX IDX_8D93D649C5B765A9 ON user');
        $this->addSql('ALTER TABLE user DROP user_favorite_games_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_fav_games (user_id VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, game_id INT DEFAULT NULL, INDEX IDX_9EB0425EE48FD905 (game_id), PRIMARY KEY(user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_fav_studios (user_id VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, studio_id INT DEFAULT NULL, INDEX IDX_EF4D3DB2446F285F (studio_id), PRIMARY KEY(user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_favorite_games (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_favorite_studios (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_favorite_studios_studio (user_favorite_studios_id INT NOT NULL, studio_id INT NOT NULL, INDEX IDX_762572E1446F285F (studio_id), INDEX IDX_762572E128E913E7 (user_favorite_studios_id), PRIMARY KEY(user_favorite_studios_id, studio_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_favorite_studios_user (user_favorite_studios_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_717FCCC3A76ED395 (user_id), INDEX IDX_717FCCC328E913E7 (user_favorite_studios_id), PRIMARY KEY(user_favorite_studios_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE user_fav_games ADD CONSTRAINT FK_9EB0425EE48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE user_fav_studios ADD CONSTRAINT FK_EF4D3DB2446F285F FOREIGN KEY (studio_id) REFERENCES studio (id)');
        $this->addSql('ALTER TABLE user_favorite_studios_studio ADD CONSTRAINT FK_762572E128E913E7 FOREIGN KEY (user_favorite_studios_id) REFERENCES user_favorite_studios (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_favorite_studios_studio ADD CONSTRAINT FK_762572E1446F285F FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_favorite_studios_user ADD CONSTRAINT FK_717FCCC328E913E7 FOREIGN KEY (user_favorite_studios_id) REFERENCES user_favorite_studios (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_favorite_studios_user ADD CONSTRAINT FK_717FCCC3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_game DROP FOREIGN KEY FK_59AA7D45A76ED395');
        $this->addSql('ALTER TABLE user_game DROP FOREIGN KEY FK_59AA7D45E48FD905');
        $this->addSql('DROP TABLE user_game');
        $this->addSql('ALTER TABLE user ADD user_favorite_games_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649C5B765A9 FOREIGN KEY (user_favorite_games_id) REFERENCES user_favorite_games (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649C5B765A9 ON user (user_favorite_games_id)');
    }
}
