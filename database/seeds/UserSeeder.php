<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'job@elmv.ru',
            'password' => Hash::make('asdasd'),
            'role' => 2
        ]);
        User::create([
            'name' => 'User',
            'email' => 'elmvoth@gmail.com',
            'password' => Hash::make('asdasd'),
            'role' => 1
        ]);
    }
}
