<?php

namespace App\Repository;

use App\Entity\UserFavStudios;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserFavStudios>
 *
 * @method UserFavStudios|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserFavStudios|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserFavStudios[]    findAll()
 * @method UserFavStudios[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserFavStudiosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserFavStudios::class);
    }

    //    /**
    //     * @return UserFavStudios[] Returns an array of UserFavStudios objects
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

    //    public function findOneBySomeField($value): ?UserFavStudios
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
