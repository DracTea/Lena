-- Adminer 4.8.4 MySQL 8.0.36 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `ap_cache`;
CREATE TABLE `ap_cache` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ap_cache` (`key`, `value`, `expiration`) VALUES
('css-/assets/admin/app.css',	's:87:\"<link rel=\"stylesheet\" href=\"http://hydrogen.test/assets/admin/app.css?v=1741452092\">\r\n\";',	2056813201),
('css-/assets/app/app.css',	's:85:\"<link rel=\"stylesheet\" href=\"http://hydrogen.test/assets/app/app.css?v=1741450794\">\r\n\";',	2056812791),
('illuminate:cache:flexible:created:lt.inertia',	'i:1741545638;',	1742409638),
('lt.inertia',	'a:7:{s:5:\"asset\";s:32:\"http://hydrogen.test/assets/app/\";s:5:\"media\";s:27:\"http://hydrogen.test/media/\";s:3:\"url\";s:20:\"http://hydrogen.test\";s:5:\"debug\";b:1;s:6:\"routes\";a:8:{s:7:\"lt.form\";a:1:{s:3:\"url\";s:14:\"/api/form/{id}\";}s:11:\"lt.homepage\";a:1:{s:3:\"url\";s:1:\"/\";}s:8:\"lt.about\";a:1:{s:3:\"url\";s:5:\"/apie\";}s:11:\"lt.projects\";a:1:{s:3:\"url\";s:7:\"/darbai\";}s:10:\"lt.careers\";a:1:{s:3:\"url\";s:8:\"/karjera\";}s:10:\"lt.contact\";a:1:{s:3:\"url\";s:10:\"/kontaktai\";}s:10:\"lt.project\";a:1:{s:3:\"url\";s:13:\"/darbai/{url}\";}s:9:\"lt.career\";a:1:{s:3:\"url\";s:14:\"/karjera/{url}\";}}s:4:\"lang\";s:2:\"lt\";s:6:\"shield\";s:24:\"0x4AAAAAAA0gBxz6V5tX1WPQ\";}',	1742409638);

DROP TABLE IF EXISTS `ap_cache_locks`;
CREATE TABLE `ap_cache_locks` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `ap_migrations`;
CREATE TABLE `ap_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ap_migrations` (`id`, `migration`, `batch`) VALUES
(1,	'0001_01_01_000000_create_users_table',	1),
(2,	'0001_01_01_000001_create_cache_table',	1),
(3,	'0001_01_01_000002_create_jobs_table',	1);

DROP TABLE IF EXISTS `ap_password_reset_tokens`;
CREATE TABLE `ap_password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `ap_sessions`;
CREATE TABLE `ap_sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_activity` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ap_sessions_user_id_index` (`user_id`),
  KEY `ap_sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ap_sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0195c473-969f-7000-8033-254a1cf4b886',	NULL,	'unknown',	'',	'{}',	1742757664416),
('otNTZKe85v9e0dlLGmeCHmqfqAS2kDCyqewQv08M',	2,	'127.0.0.1',	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',	'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiR3p3aXE4M0x0VzlLSFNST3pzblRMUG1vZFZnU2FiY3RsWGxDSm1JTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9oeWRyb2dlbi50ZXN0L2FwYW5lbC90ZWFtLzMwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9',	1741632758);

DROP TABLE IF EXISTS `ap_users`;
CREATE TABLE `ap_users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `group` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `two_factor_secret` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `two_factor_recovery_codes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ap_users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ap_users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `group`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `created_at`, `updated_at`) VALUES
(2,	'dracula',	'dracula@icloud.com',	NULL,	'$2y$12$J6HmPNtSC.XxHC4IZ3dLzehMmjB/qQtYFeq8Rn6jiTf6AcM.kWgle',	NULL,	'root',	NULL,	NULL,	NULL,	'2025-02-25 14:46:30',	'2025-02-25 14:46:30');

-- 2025-04-08 17:54:15
