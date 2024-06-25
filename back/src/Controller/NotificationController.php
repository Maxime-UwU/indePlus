<?php

namespace App\Controller;

use Kreait\Firebase\Contract\Messaging;
use Kreait\Firebase\Exception\MessagingException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class NotificationController extends AbstractController
{
    private $messaging;

    public function __construct(Messaging $messaging)
    {
        $this->messaging = $messaging;
    }

    #[Route('/notification', name: 'app_notif')]
    public function index(): Response
    {
        // Optionnel : Ajoutez du code ici si vous avez une page de notification.
        return new Response('Notification index page');
    }

    #[Route('/send-notification', name: 'send_notification')]
    public function sendNotification(Request $request,): Response
    {

        $data = json_decode($request->getContent(), true);

        $token = $data['token'];

        $message = [
            'notification' => [
                'title' => 'Hello',
                'body' => 'World'
            ],
            'token' => $token
        ];

        try {
            $this->messaging->send($message);
            return new Response('Notification sent!');
        } catch (MessagingException $e) {
            return new Response('Error sending notification: ' . $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}