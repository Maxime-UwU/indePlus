<?php

namespace App\Repository;

use App\Entity\UserFavoriteGames;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserFavoriteGames>
 *
 * @method UserFavoriteGames|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserFavoriteGames|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserFavoriteGames[]    findAll()
 * @method UserFavoriteGames[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserFavoriteGamesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserFavoriteGames::class);
    }

    //    /**
    //     * @return UserFavoriteGames[] Returns an array of UserFavoriteGames objects
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

    //    public function findOneBySomeField($value): ?UserFavoriteGames
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
