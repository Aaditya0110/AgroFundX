package com.appdevteam.agrofundx.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevteam.agrofundx.entity.UserInfo;
import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);
}
