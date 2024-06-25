<?php

namespace App\Entity;

use App\Repository\UserFavGamesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserFavGamesRepository::class)]
class UserFavGames
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]

    #[ORM\ManyToOne]
    private ?User $user_id = null;

    #[ORM\ManyToOne]
    private ?Game $game = null;

    public function getUserId(): ?User
    {
        return $this->user_id;
    }

    public function setUserId(?User $user_id): static
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getGameId(): ?Game
    {
        return $this->game;
    }

    public function setGameId(?Game $game): static
    {
        $this->game = $game;

        return $this;
    }
}
