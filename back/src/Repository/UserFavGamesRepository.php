<?php

namespace App\Repository;

use App\Entity\UserFavGames;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserFavGames>
 *
 * @method UserFavGames|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserFavGames|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserFavGames[]    findAll()
 * @method UserFavGames[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserFavGamesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserFavGames::class);
    }

    //    /**
    //     * @return UserFavGames[] Returns an array of UserFavGames objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?UserFavGames
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
