<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Studio;

class StudioController extends AbstractController
{
    #[Route('/studio', name: 'app_studio')]
    public function index(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $studios = $entityManager->getRepository(Studio::class)->findAll();

        $studiosData = [];

        if ($studios !== null) {
            foreach($studios as $studio){
                $studiosData[] = [
                    'id' => $studio->getId(),
                    'name' => $studio->getName(),
                    'image' => $studio->getImage(),
                    'description' => $studio->getDescription(),
                ];
            }

            return new JsonResponse([
                'studiosData' => $studiosData,
            ]);
        } else {
            return new JsonResponse(['message' => 'Studios non trouvés'], 404);
        }
    }
}
