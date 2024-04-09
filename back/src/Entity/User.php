<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_UUID', fields: ['uuid'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $uuid = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(nullable: true)]
    private ?array $tags = null;

    /**
     * @var Collection<int, Game>
     */
    #[ORM\ManyToMany(targetEntity: Game::class, inversedBy: 'users')]
    private Collection $favGames;

    /**
     * @var Collection<int, Studio>
     */
    #[ORM\ManyToMany(targetEntity: Studio::class, inversedBy: 'users')]
    private Collection $favStudios;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $notif = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $joinDate = null;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    public function __construct()
    {
        $this->favGames = new ArrayCollection();
        $this->favStudios = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(string $uuid): static
    {
        $this->uuid = $uuid;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->uuid;
    }

    /**
     * @see UserInterface
     *
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getTags(): ?array
    {
        return $this->tags;
    }

    public function setTags(?array $tags): static
    {
        $this->tags = $tags;

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
    public function getFavStudios(): Collection
    {
        return $this->favStudios;
    }

    public function addFavStudio(Studio $favStudio): static
    {
        if (!$this->favStudios->contains($favStudio)) {
            $this->favStudios->add($favStudio);
        }

        return $this;
    }

    public function removeFavStudio(Studio $favStudio): static
    {
        $this->favStudios->removeElement($favStudio);

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

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }
}
