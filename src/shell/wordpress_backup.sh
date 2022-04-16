#!/bin/bash
 
# your backups will use these filenames.
db_backup_name="wp-db-backup-"`date "+%Y-%m-%d"`".sql.gz"
wpfiles_backup_name="wp-files-backup-"`date "+%Y-%m-%d"`".tar.gz"

## 1: database connection info. You can get these details from your wp-config file.
db_name="database_name"
db_username="database_username"
db_password="database_password"

## 2: Path to your WordPress Upload and Theme directories. Replace /home/username/ with path to your home directory.
wp_upload_folder="/home/username/public_html/wp-content/themes"
wp_theme_folder="/home/username/public_html/wp-content/uploads"
 
## 3: Path to your backup folder. Replace /home/username/ with path to your home directory.
backup_folder_path="/home/username/wp_backup"

# backup MYSQL database, gzip it and send to backup folder.
mysqldump --opt -u$db_username -p$db_password $db_name | gzip > $backup_folder_path/$db_backup_name

# create a tarball of the wordpress files, gzip it and send to backup folder.
tar -czf $backup_folder_path/$wpfiles_backup_name $wp_upload_folder $wp_theme_folder

# delete all but 5 recent wordpress database back-ups (files having .sql.gz extension) in backup folder.
find $backup_folder_path -maxdepth 1 -name "*.sql.gz" -type f | xargs -x ls -t | awk 'NR>5' | xargs -L1 rm

# delete all but 5 recent wordpress files back-ups (files having .tar.gz extension) in backup folder.
find $backup_folder_path -maxdepth 1 -name "*.tar.gz" -type f | xargs -x ls -t | awk 'NR>5' | xargs -L1 rm
