<?php

namespace App\Entity;

use App\Repository\UserFavStudiosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserFavStudiosRepository::class)]
class UserFavStudios
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]

    #[ORM\ManyToOne]
    private ?User $user_id = null;

    #[ORM\ManyToOne]
    private ?Studio $studio = null;

    public function getUserId(): ?User
    {
        return $this->user_id;
    }

    public function setUserId(?User $user_id): static
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getStudioId(): ?Studio
    {
        return $this->studio;
    }

    public function setStudioId(?Studio $studio): static
    {
        $this->studio = $studio;

        return $this;
    }
}
