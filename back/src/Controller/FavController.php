<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;
use App\Entity\Game;

class FavController extends AbstractController
{
    #[Route('/changeFav', name: 'app_changeFav')]
    public function index(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {

        $data = json_decode($request->getContent(), true);

        $userId = 1;
        // $gameId = 2;
        $gameId = $data['gameId'];

        $user = $entityManager->getRepository(User::class)->find($userId);
        $game = $entityManager->getRepository(Game::class)->find($gameId);
        $favGame = $entityManager->getRepository(User::class)->findFavGameByUserAndGameId($userId, $gameId);

        if ($favGame) {
            $user->removeFavGame($game);
            $entityManager->flush();
            $response = [
                'status' => 'success',
            ];
        } else {
            $user->addFavGame($game);
            $entityManager->flush();
            $response = [
                'status' => 'error',
            ];
        }

        return new JsonResponse($response);
    }

    #[Route('/checkFav', name: 'app_checkFav')]
    public function checkFav(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {

        $userId = 1;
        $gameId = 2; 

        $user = $entityManager->getRepository(User::class)->find($userId);
        $game = $entityManager->getRepository(Game::class)->find($gameId);
        $favGame = $entityManager->getRepository(User::class)->findFavGameByUserAndGameId($userId, $gameId);

        if ($favGame) {
            $response = [
                'status' => 'success',
            ];
        } else {
            $response = [
                'status' => 'error',
            ];
        }

        return new JsonResponse($response);
    }
}
