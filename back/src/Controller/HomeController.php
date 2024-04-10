<?php

namespace App\Controller;

use Doctrine\Common\Collections\Expr\Value;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Studio;
use App\Entity\User;


class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $studios = $entityManager->getRepository(Studio::class)->findAll();

        $studiosData = [];

        if ($studios !== null) {
            foreach($studios as $studio){
                $studiosData[] = [
                    'id' => $studio->getName(),
                    'username' => $studio->getImage(),
                    'description' => $studio->getDescription(),

                ];
            }
            
        
            return new JsonResponse($studiosData, 200);
        } else {
            return new JsonResponse(['message' => 'Utilisateur non trouvé'], 404);
        }

        // try {
        //     $studios = $entityManager->getRepository(Studio::class)->findAll();
        //     return new JsonResponse($studios, 200);
        // } catch (\Exception $e) {
        //     return new JsonResponse(['message' => 'Une erreur s\'est produite lors de la récupération des studios.'], 500);
        // }
    }
}
