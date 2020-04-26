## deploy
```
composer install
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
composer dumpautoload -o
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
```

## start local server

php artisan serve
http://localhost:8000/

## migrations and seeds:
```php artisan migrate:fresh --seed``` 

## if has error seeds:
```composer dump-autoload``` 

## clear cache
```
 php artisan config:cache
 php artisan cache:clear  
```

## frontend deploy in
```
resources/frontend/app
```
