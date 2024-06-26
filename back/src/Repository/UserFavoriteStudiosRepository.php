<?php

namespace App\Repository;

use App\Entity\UserFavoriteStudios;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserFavoriteStudios>
 *
 * @method UserFavoriteStudios|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserFavoriteStudios|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserFavoriteStudios[]    findAll()
 * @method UserFavoriteStudios[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserFavoriteStudiosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserFavoriteStudios::class);
    }

    //    /**
    //     * @return UserFavoriteStudios[] Returns an array of UserFavoriteStudios objects
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

    //    public function findOneBySomeField($value): ?UserFavoriteStudios
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
