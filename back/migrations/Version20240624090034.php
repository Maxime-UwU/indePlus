<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624090034 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_fav_games (id INT AUTO_INCREMENT NOT NULL, user_id_id INT DEFAULT NULL, game_id_id INT DEFAULT NULL, INDEX IDX_9EB0425E9D86650F (user_id_id), INDEX IDX_9EB0425E4D77E7D8 (game_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_fav_studios (id INT AUTO_INCREMENT NOT NULL, user_id_id INT DEFAULT NULL, studio_id_id INT DEFAULT NULL, INDEX IDX_EF4D3DB29D86650F (user_id_id), INDEX IDX_EF4D3DB281F17E9A (studio_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_fav_games ADD CONSTRAINT FK_9EB0425E9D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_fav_games ADD CONSTRAINT FK_9EB0425E4D77E7D8 FOREIGN KEY (game_id_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE user_fav_studios ADD CONSTRAINT FK_EF4D3DB29D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_fav_studios ADD CONSTRAINT FK_EF4D3DB281F17E9A FOREIGN KEY (studio_id_id) REFERENCES studio (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_fav_games DROP FOREIGN KEY FK_9EB0425E9D86650F');
        $this->addSql('ALTER TABLE user_fav_games DROP FOREIGN KEY FK_9EB0425E4D77E7D8');
        $this->addSql('ALTER TABLE user_fav_studios DROP FOREIGN KEY FK_EF4D3DB29D86650F');
        $this->addSql('ALTER TABLE user_fav_studios DROP FOREIGN KEY FK_EF4D3DB281F17E9A');
        $this->addSql('DROP TABLE user_fav_games');
        $this->addSql('DROP TABLE user_fav_studios');
    }
}
