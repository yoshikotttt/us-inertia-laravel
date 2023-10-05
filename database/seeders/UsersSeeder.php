<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'はちわれ',
                'email' => 'hachi@example.com',
                'skyway_id' => 'SkyWay-12345678901234567890',
                'password' => '12345678',
                
            ],
            [
                'name' => 'ねこ',
                'email' => 'neko@example.com',
                'skyway_id' => 'SkyWay-11111111111111111111',
                'password' => '12345678',
            ],
            [
                'name' => 'ぽち',
                'email' => 'pochi@example.com',
                'skyway_id' => 'SkyWay-22222222222222222222',
                'password' => '12345678',
            ],
            [
                'name' => 'うさぎ',
                'email' => 'usagi@example.com',
                'skyway_id' => 'SkyWay-33333333333333333333',
                'password' => '12345678',
            ]
            ];
        foreach ($users as $user) {
            DB::table('users')->insert($user);
    }
}
}