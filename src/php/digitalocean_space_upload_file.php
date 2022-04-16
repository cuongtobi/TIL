<?php
// Install AWS SDK
// composer require aws/aws-sdk-php
// Require AWS SDK
require 'vendor/autoload.php';

use Aws\S3\S3Client;

$client = new S3Client([
    'version' => 'latest',
    'region' => 'us-east-1',
    'endpoint' => 'https://nyc3.digitaloceanspaces.com',
    'credentials' => [
        'key' => 'KEY',
        'secret' => 'SECRET',
    ],
]);

$result = $client->putObject([
    'Bucket' => 'BUCKET',
    'Key' => 'FILENAME',
    'Body' => fopen('FILEPATH', 'r'),
    'ACL' => 'public-read',
    'ContentType' => 'CONTENT_TYPE',
]);
