<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    /**
     * @var Collection<int, Tag>
     */
    #[ORM\ManyToMany(targetEntity: Tag::class, inversedBy: 'users')]
    private Collection $tag;

    /**
     * @var Collection<int, Game>
     */
    #[ORM\ManyToMany(targetEntity: Game::class, inversedBy: 'users')]
    private Collection $favGames;

    /**
     * @var Collection<int, Studio>
     */
    #[ORM\ManyToMany(targetEntity: Studio::class, inversedBy: 'users')]
    private Collection $favStudio;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $notif = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $joinDate = null;

    public function __construct()
    {
        $this->tag = new ArrayCollection();
        $this->favGames = new ArrayCollection();
        $this->favStudio = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return Collection<int, Tag>
     */
    public function getTag(): Collection
    {
        return $this->tag;
    }

    public function addTag(Tag $tag): static
    {
        if (!$this->tag->contains($tag)) {
            $this->tag->add($tag);
        }

        return $this;
    }

    public function removeTag(Tag $tag): static
    {
        $this->tag->removeElement($tag);

        return $this;
    }

    /**
     * @return Collection<int, Game>
     */
    public function getFavGames(): Collection
    {
        return $this->favGames;
    }

    public function addFavGame(Game $favGame): static
    {
        if (!$this->favGames->contains($favGame)) {
            $this->favGames->add($favGame);
        }

        return $this;
    }

    public function removeFavGame(Game $favGame): static
    {
        $this->favGames->removeElement($favGame);

        return $this;
    }

    /**
     * @return Collection<int, Studio>
     */
    public function getFavStudio(): Collection
    {
        return $this->favStudio;
    }

    public function addFavStudio(Studio $favStudio): static
    {
        if (!$this->favStudio->contains($favStudio)) {
            $this->favStudio->add($favStudio);
        }

        return $this;
    }

    public function removeFavStudio(Studio $favStudio): static
    {
        $this->favStudio->removeElement($favStudio);

        return $this;
    }

    public function getNotif(): ?string
    {
        return $this->notif;
    }

    public function setNotif(?string $notif): static
    {
        $this->notif = $notif;

        return $this;
    }

    public function getJoinDate(): ?\DateTimeInterface
    {
        return $this->joinDate;
    }

    public function setJoinDate(\DateTimeInterface $joinDate): static
    {
        $this->joinDate = $joinDate;

        return $this;
    }
}
