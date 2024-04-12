<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Game;

class GameController extends AbstractController
{
    #[Route('/game', name: 'app_game')]
    public function index(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $games = $entityManager->getRepository(Game::class)->findBy([], ['releaseDate' => 'DESC']);

        $gamesData = [];

        if ($games !== null) {
            foreach($games as $game){
                $gamesData[] = [
                    'id' => $game->getId(),
                    'name' => $game->getName(),
                    'image' => $game->getImage(),
                    'description' => $game->getDescription(),
                    'plateform' => $game->getPlateform(),
                ];
            }
            return new JsonResponse($gamesData, 200);
        } else {
            return new JsonResponse(['message' => 'Jeux non trouvés'], 404);
        }
    }
}
