package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Pet;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Pet entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PetRepository extends MongoRepository<Pet, String> {

}
