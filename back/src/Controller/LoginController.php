<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\User;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function login(Request $request, UserPasswordHasherInterface $passwordEncoder, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $username = $data['username'];
        $password = $data['password'];

        $user = $entityManager->getRepository(User::class)->findOneBy(['username' => $username]);


        if ($user && $user->getPassword() === $password) {
            return new JsonResponse(['message' => 'Bienvenu'], 200);
        } else {
            return new JsonResponse(['message' => 'Identifiant ou mot de passe incorrect'], 401);
        }
    }
}
