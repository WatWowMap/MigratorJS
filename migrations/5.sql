ALTER TABLE `instance` ADD COLUMN `geofence` varchar(255) DEFAULT NULL;

CREATE TABLE IF NOT EXISTS `geofence` (
    `name` varchar(255),
    `type` enum('circle','geofence') NOT NULL,
    `data` longtext NOT NULL,
    PRIMARY KEY ('name')
);

-- TODO: foreign key constraint on update on delete etc for instances/geofences