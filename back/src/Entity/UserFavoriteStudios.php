<?php

namespace App\Entity;

use App\Repository\UserFavoriteStudiosRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserFavoriteStudiosRepository::class)]
class UserFavoriteStudios
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class)]
    private Collection $user_id;

    /**
     * @var Collection<int, Studio>
     */
    #[ORM\ManyToMany(targetEntity: Studio::class)]
    private Collection $studio_id;

    public function __construct()
    {
        $this->user_id = new ArrayCollection();
        $this->studio_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUserId(): Collection
    {
        return $this->user_id;
    }

    public function addUserId(User $userId): static
    {
        if (!$this->user_id->contains($userId)) {
            $this->user_id->add($userId);
        }

        return $this;
    }

    public function removeUserId(User $userId): static
    {
        $this->user_id->removeElement($userId);

        return $this;
    }

    /**
     * @return Collection<int, Studio>
     */
    public function getStudioId(): Collection
    {
        return $this->studio_id;
    }

    public function addStudioId(Studio $studioId): static
    {
        if (!$this->studio_id->contains($studioId)) {
            $this->studio_id->add($studioId);
        }

        return $this;
    }

    public function removeStudioId(Studio $studioId): static
    {
        $this->studio_id->removeElement($studioId);

        return $this;
    }
}
