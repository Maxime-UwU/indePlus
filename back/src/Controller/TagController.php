<?php

namespace App\Controller;

use App\Entity\Tag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

class TagController extends AbstractController
{
    #[Route('/tag', name: 'app_tag')]
    public function tag(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $tags = $entityManager->getRepository(Tag::class)->findAll();

        $tagsData = [];

        if ($tags !== null) {
            foreach ($tags as $tag) {

                $tagsData[] = [
                    'id' => $tag->getId(),
                    'name' => $tag->getName(),
                ];
            }
        }
        return new JsonResponse([
            'tagData' => $tagsData,
        ]);
    }
}
