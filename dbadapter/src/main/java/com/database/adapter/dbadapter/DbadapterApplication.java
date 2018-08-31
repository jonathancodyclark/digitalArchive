package com.database.adapter.dbadapter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.database.adapter.dbadapter.repositories")
public class DbadapterApplication {

	public static void main(String[] args) {
		SpringApplication.run(DbadapterApplication.class, args);
	}
}
