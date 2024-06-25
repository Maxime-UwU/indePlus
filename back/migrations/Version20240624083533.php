<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624083533 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_fav_games (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_fav_studios (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_game DROP FOREIGN KEY FK_59AA7D45A76ED395');
        $this->addSql('ALTER TABLE user_game DROP FOREIGN KEY FK_59AA7D45E48FD905');
        $this->addSql('ALTER TABLE user_studio DROP FOREIGN KEY FK_2F791C8B446F285F');
        $this->addSql('ALTER TABLE user_studio DROP FOREIGN KEY FK_2F791C8BA76ED395');
        $this->addSql('DROP TABLE user_game');
        $this->addSql('DROP TABLE user_studio');
        $this->addSql('ALTER TABLE game CHANGE plateform platform VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_game (user_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_59AA7D45E48FD905 (game_id), INDEX IDX_59AA7D45A76ED395 (user_id), PRIMARY KEY(user_id, game_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_studio (user_id INT NOT NULL, studio_id INT NOT NULL, INDEX IDX_2F791C8BA76ED395 (user_id), INDEX IDX_2F791C8B446F285F (studio_id), PRIMARY KEY(user_id, studio_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE user_game ADD CONSTRAINT FK_59AA7D45A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_game ADD CONSTRAINT FK_59AA7D45E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_studio ADD CONSTRAINT FK_2F791C8B446F285F FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_studio ADD CONSTRAINT FK_2F791C8BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE user_fav_games');
        $this->addSql('DROP TABLE user_fav_studios');
        $this->addSql('ALTER TABLE game CHANGE platform plateform VARCHAR(255) DEFAULT NULL');
    }
}
