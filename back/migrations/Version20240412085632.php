<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240412085632 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE game_studio (game_id INT NOT NULL, studio_id INT NOT NULL, INDEX IDX_371EAA7EE48FD905 (game_id), INDEX IDX_371EAA7E446F285F (studio_id), PRIMARY KEY(game_id, studio_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_tag (game_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_18D3A446E48FD905 (game_id), INDEX IDX_18D3A446BAD26311 (tag_id), PRIMARY KEY(game_id, tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_tag (user_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_E89FD608A76ED395 (user_id), INDEX IDX_E89FD608BAD26311 (tag_id), PRIMARY KEY(user_id, tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_game (user_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_59AA7D45A76ED395 (user_id), INDEX IDX_59AA7D45E48FD905 (game_id), PRIMARY KEY(user_id, game_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_studio (user_id INT NOT NULL, studio_id INT NOT NULL, INDEX IDX_2F791C8BA76ED395 (user_id), INDEX IDX_2F791C8B446F285F (studio_id), PRIMARY KEY(user_id, studio_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE game_studio ADD CONSTRAINT FK_371EAA7EE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_studio ADD CONSTRAINT FK_371EAA7E446F285F FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_tag ADD CONSTRAINT FK_18D3A446E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_tag ADD CONSTRAINT FK_18D3A446BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_tag ADD CONSTRAINT FK_E89FD608A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_tag ADD CONSTRAINT FK_E89FD608BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_game ADD CONSTRAINT FK_59AA7D45A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_game ADD CONSTRAINT FK_59AA7D45E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_studio ADD CONSTRAINT FK_2F791C8BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_studio ADD CONSTRAINT FK_2F791C8B446F285F FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE teeeest_tag DROP FOREIGN KEY FK_AB811EDAD04F6BFD');
        $this->addSql('ALTER TABLE teeeest_tag DROP FOREIGN KEY FK_AB811EDABAD26311');
        $this->addSql('ALTER TABLE test DROP FOREIGN KEY FK_D87F7E0CBAD26311');
        $this->addSql('DROP TABLE teeeest');
        $this->addSql('DROP TABLE teeeest_tag');
        $this->addSql('DROP TABLE test');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C446F285F');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318CA76ED395');
        $this->addSql('DROP INDEX IDX_232B318C446F285F ON game');
        $this->addSql('DROP INDEX IDX_232B318CA76ED395 ON game');
        $this->addSql('ALTER TABLE game DROP studio_id, DROP user_id, CHANGE comment comment VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE studio DROP FOREIGN KEY FK_4A2B07B6A76ED395');
        $this->addSql('DROP INDEX IDX_4A2B07B6A76ED395 ON studio');
        $this->addSql('ALTER TABLE studio DROP user_id');
        $this->addSql('ALTER TABLE tag DROP FOREIGN KEY FK_389B783A76ED395');
        $this->addSql('ALTER TABLE tag DROP FOREIGN KEY FK_389B783E48FD905');
        $this->addSql('DROP INDEX IDX_389B783A76ED395 ON tag');
        $this->addSql('DROP INDEX IDX_389B783E48FD905 ON tag');
        $this->addSql('ALTER TABLE tag DROP game_id, DROP user_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE teeeest (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE teeeest_tag (teeeest_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_AB811EDAD04F6BFD (teeeest_id), INDEX IDX_AB811EDABAD26311 (tag_id), PRIMARY KEY(teeeest_id, tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE test (id INT AUTO_INCREMENT NOT NULL, tag_id INT DEFAULT NULL, INDEX IDX_D87F7E0CBAD26311 (tag_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE teeeest_tag ADD CONSTRAINT FK_AB811EDAD04F6BFD FOREIGN KEY (teeeest_id) REFERENCES teeeest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE teeeest_tag ADD CONSTRAINT FK_AB811EDABAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE test ADD CONSTRAINT FK_D87F7E0CBAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id)');
        $this->addSql('ALTER TABLE game_studio DROP FOREIGN KEY FK_371EAA7EE48FD905');
        $this->addSql('ALTER TABLE game_studio DROP FOREIGN KEY FK_371EAA7E446F285F');
        $this->addSql('ALTER TABLE game_tag DROP FOREIGN KEY FK_18D3A446E48FD905');
        $this->addSql('ALTER TABLE game_tag DROP FOREIGN KEY FK_18D3A446BAD26311');
        $this->addSql('ALTER TABLE user_tag DROP FOREIGN KEY FK_E89FD608A76ED395');
        $this->addSql('ALTER TABLE user_tag DROP FOREIGN KEY FK_E89FD608BAD26311');
        $this->addSql('ALTER TABLE user_game DROP FOREIGN KEY FK_59AA7D45A76ED395');
        $this->addSql('ALTER TABLE user_game DROP FOREIGN KEY FK_59AA7D45E48FD905');
        $this->addSql('ALTER TABLE user_studio DROP FOREIGN KEY FK_2F791C8BA76ED395');
        $this->addSql('ALTER TABLE user_studio DROP FOREIGN KEY FK_2F791C8B446F285F');
        $this->addSql('DROP TABLE game_studio');
        $this->addSql('DROP TABLE game_tag');
        $this->addSql('DROP TABLE user_tag');
        $this->addSql('DROP TABLE user_game');
        $this->addSql('DROP TABLE user_studio');
        $this->addSql('ALTER TABLE game ADD studio_id INT NOT NULL, ADD user_id INT DEFAULT NULL, CHANGE comment comment JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C446F285F FOREIGN KEY (studio_id) REFERENCES studio (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_232B318C446F285F ON game (studio_id)');
        $this->addSql('CREATE INDEX IDX_232B318CA76ED395 ON game (user_id)');
        $this->addSql('ALTER TABLE studio ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE studio ADD CONSTRAINT FK_4A2B07B6A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_4A2B07B6A76ED395 ON studio (user_id)');
        $this->addSql('ALTER TABLE tag ADD game_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tag ADD CONSTRAINT FK_389B783A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE tag ADD CONSTRAINT FK_389B783E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('CREATE INDEX IDX_389B783A76ED395 ON tag (user_id)');
        $this->addSql('CREATE INDEX IDX_389B783E48FD905 ON tag (game_id)');
    }
}
