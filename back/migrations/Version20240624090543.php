<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624090543 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX `primary` ON user_fav_games');
        $this->addSql('ALTER TABLE user_fav_games CHANGE user user_id VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user_fav_games ADD PRIMARY KEY (user_id)');
        $this->addSql('DROP INDEX `primary` ON user_fav_studios');
        $this->addSql('ALTER TABLE user_fav_studios CHANGE user user_id VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user_fav_studios ADD PRIMARY KEY (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_fav_games MODIFY user_id VARCHAR(255) NOT NULL');
        $this->addSql('DROP INDEX `PRIMARY` ON user_fav_games');
        $this->addSql('ALTER TABLE user_fav_games CHANGE user_id user VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user_fav_games ADD PRIMARY KEY (user)');
        $this->addSql('ALTER TABLE user_fav_studios MODIFY user_id VARCHAR(255) NOT NULL');
        $this->addSql('DROP INDEX `PRIMARY` ON user_fav_studios');
        $this->addSql('ALTER TABLE user_fav_studios CHANGE user_id user VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user_fav_studios ADD PRIMARY KEY (user)');
    }
}
