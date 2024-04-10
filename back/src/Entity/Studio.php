<?php

namespace App\Entity;

use App\Repository\StudioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StudioRepository::class)]
class Studio
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\Column(nullable: true)]
    private ?array $comment = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $linkX = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $urlInsta = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $urlFacebook = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $urlYoutube = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $notif = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $joinDate = null;

    /**
     * @var Collection<int, Game>
     */
    #[ORM\OneToMany(targetEntity: Game::class, mappedBy: 'studio')]
    private Collection $games;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'favStudios')]
    private Collection $users;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    public function __construct()
    {
        $this->games = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getComment(): ?array
    {
        return $this->comment;
    }

    public function setComment(?array $comment): static
    {
        $this->comment = $comment;

        return $this;
    }

    public function getLinkX(): ?string
    {
        return $this->linkX;
    }

    public function setLinkX(?string $linkX): static
    {
        $this->linkX = $linkX;

        return $this;
    }

    public function getUrlInsta(): ?string
    {
        return $this->urlInsta;
    }

    public function setUrlInsta(?string $urlInsta): static
    {
        $this->urlInsta = $urlInsta;

        return $this;
    }

    public function getUrlFacebook(): ?string
    {
        return $this->urlFacebook;
    }

    public function setUrlFacebook(?string $urlFacebook): static
    {
        $this->urlFacebook = $urlFacebook;

        return $this;
    }

    public function getUrlYoutube(): ?string
    {
        return $this->urlYoutube;
    }

    public function setUrlYoutube(?string $urlYoutube): static
    {
        $this->urlYoutube = $urlYoutube;

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

    /**
     * @return Collection<int, Game>
     */
    public function getGames(): Collection
    {
        return $this->games;
    }

    public function addGames(Game $games): static
    {
        if (!$this->games->contains($games)) {
            $this->games->add($games);
            $games->setStudio($this);
        }

        return $this;
    }

    public function removeGames(Game $games): static
    {
        if ($this->games->removeElement($games)) {
            // set the owning side to null (unless already changed)
            if ($games->getStudio() === $this) {
                $games->setStudio(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->addFavStudio($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            $user->removeFavStudio($this);
        }

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
