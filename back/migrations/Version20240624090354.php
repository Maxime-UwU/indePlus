<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624090354 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_fav_games DROP FOREIGN KEY FK_9EB0425E4D77E7D8');
        $this->addSql('ALTER TABLE user_fav_games DROP FOREIGN KEY FK_9EB0425E9D86650F');
        $this->addSql('DROP INDEX IDX_9EB0425E9D86650F ON user_fav_games');
        $this->addSql('DROP INDEX IDX_9EB0425E4D77E7D8 ON user_fav_games');
        $this->addSql('ALTER TABLE user_fav_games ADD user VARCHAR(255) NOT NULL, ADD game_id INT DEFAULT NULL, DROP id, DROP user_id_id, DROP game_id_id, DROP PRIMARY KEY, ADD PRIMARY KEY (user)');
        $this->addSql('ALTER TABLE user_fav_games ADD CONSTRAINT FK_9EB0425EE48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('CREATE INDEX IDX_9EB0425EE48FD905 ON user_fav_games (game_id)');
        $this->addSql('ALTER TABLE user_fav_studios DROP FOREIGN KEY FK_EF4D3DB281F17E9A');
        $this->addSql('ALTER TABLE user_fav_studios DROP FOREIGN KEY FK_EF4D3DB29D86650F');
        $this->addSql('DROP INDEX IDX_EF4D3DB281F17E9A ON user_fav_studios');
        $this->addSql('DROP INDEX IDX_EF4D3DB29D86650F ON user_fav_studios');
        $this->addSql('ALTER TABLE user_fav_studios ADD user VARCHAR(255) NOT NULL, ADD studio_id INT DEFAULT NULL, DROP id, DROP user_id_id, DROP studio_id_id, DROP PRIMARY KEY, ADD PRIMARY KEY (user)');
        $this->addSql('ALTER TABLE user_fav_studios ADD CONSTRAINT FK_EF4D3DB2446F285F FOREIGN KEY (studio_id) REFERENCES studio (id)');
        $this->addSql('CREATE INDEX IDX_EF4D3DB2446F285F ON user_fav_studios (studio_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_fav_games DROP FOREIGN KEY FK_9EB0425EE48FD905');
        $this->addSql('DROP INDEX IDX_9EB0425EE48FD905 ON user_fav_games');
        $this->addSql('ALTER TABLE user_fav_games ADD id INT AUTO_INCREMENT NOT NULL, ADD game_id_id INT DEFAULT NULL, DROP user, CHANGE game_id user_id_id INT DEFAULT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE user_fav_games ADD CONSTRAINT FK_9EB0425E4D77E7D8 FOREIGN KEY (game_id_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE user_fav_games ADD CONSTRAINT FK_9EB0425E9D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_9EB0425E9D86650F ON user_fav_games (user_id_id)');
        $this->addSql('CREATE INDEX IDX_9EB0425E4D77E7D8 ON user_fav_games (game_id_id)');
        $this->addSql('ALTER TABLE user_fav_studios DROP FOREIGN KEY FK_EF4D3DB2446F285F');
        $this->addSql('DROP INDEX IDX_EF4D3DB2446F285F ON user_fav_studios');
        $this->addSql('ALTER TABLE user_fav_studios ADD id INT AUTO_INCREMENT NOT NULL, ADD studio_id_id INT DEFAULT NULL, DROP user, CHANGE studio_id user_id_id INT DEFAULT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE user_fav_studios ADD CONSTRAINT FK_EF4D3DB281F17E9A FOREIGN KEY (studio_id_id) REFERENCES studio (id)');
        $this->addSql('ALTER TABLE user_fav_studios ADD CONSTRAINT FK_EF4D3DB29D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_EF4D3DB281F17E9A ON user_fav_studios (studio_id_id)');
        $this->addSql('CREATE INDEX IDX_EF4D3DB29D86650F ON user_fav_studios (user_id_id)');
    }
}
