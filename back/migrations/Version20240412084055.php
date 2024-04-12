<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240412084055 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE teeeest (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE teeeest_tag (teeeest_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_AB811EDAD04F6BFD (teeeest_id), INDEX IDX_AB811EDABAD26311 (tag_id), PRIMARY KEY(teeeest_id, tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE teeeest_tag ADD CONSTRAINT FK_AB811EDAD04F6BFD FOREIGN KEY (teeeest_id) REFERENCES teeeest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE teeeest_tag ADD CONSTRAINT FK_AB811EDABAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE teeeest_tag DROP FOREIGN KEY FK_AB811EDAD04F6BFD');
        $this->addSql('ALTER TABLE teeeest_tag DROP FOREIGN KEY FK_AB811EDABAD26311');
        $this->addSql('DROP TABLE teeeest');
        $this->addSql('DROP TABLE teeeest_tag');
    }
}
