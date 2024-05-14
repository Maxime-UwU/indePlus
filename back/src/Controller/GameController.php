<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Game;

class GameController extends AbstractController
{
    #[Route('/latestGame', name: 'app_latestGame')]
    public function index(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $latestGames = $entityManager->getRepository(Game::class)->findBy([], ['releaseDate' => 'DESC']);

        $latestGamesData = [];

        if ($latestGames !== null){
            foreach($latestGames as $latestGame){
                $studios = [];
                foreach ($latestGame->getStudio() as $studio) {
                    $studios[] = [
                        'id' => $studio->getId(),
                        'name' => $studio->getName(),
                    ];
                }

                $latestGamesData[] = [
                    'id' => $latestGame->getId(),
                    'name' => $latestGame->getName(),
                    'image' => $latestGame->getImage(),
                    'description' => $latestGame->getDescription(),
                    'plateform' => $latestGame->getPlateform(),
                    'studio' => $studios,
                ];
            }
        }
        return new JsonResponse([
            'latestGamesData' => $latestGamesData,
        ]);
    }

    #[Route('/game', name: 'app_game')]
    public function games(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $games = $entityManager->getRepository(Game::class)->findAll();

        $gamesData = [];

        if ($games !== null){
            foreach ($games as $game) {
                $studios = [];
                foreach ($game->getStudio() as $studio) {
                    $studios[] = [
                        'id' => $studio->getId(),
                        'name' => $studio->getName(),
                    ];
                }
    
                $gamesData[] = [
                    'id' => $game->getId(),
                    'name' => $game->getName(),
                    'image' => $game->getImage(),
                    'plateform' => $game->getPlateform(),
                    'description' => $game->getDescription(),
                    'studio' => $studios,
                ];
            }
        }
        return new JsonResponse([
            'gamesData' => $gamesData,
        ]);
    }
}
