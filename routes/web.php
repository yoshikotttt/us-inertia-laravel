<?php

use App\Http\Controllers\MedicalExamController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/profile-detail/edit', [UserController::class, 'edit'])->name('profile_detail.edit');
    Route::put('/profile-detail/update', [UserController::class, 'update'])->name('profile_detail.update');


    Route::get('/test', [UserController::class, 'show']);
    Route::post('/medical-exams', [MedicalExamController::class, 'store'])->name('medical-exams.store');
    Route::delete('/test/{id}', [MedicalExamController::class, 'destroy']);


    Route::get('/skyway', [MedicalExamController::class, 'showSkyway']);

    Route::get('/medical-exam', function () {
        return Inertia::render('ExamDetailEntryPage');
    });


    // Route::get('/home', function () {
    //     return Inertia::render('HomePage', [
    //         'user' => Auth::user()->only(['id', 'name', 'email', 'role']) // 認証されたユーザーの情報を渡す
    //     ]);
    // })->name('home');

    Route::get('/home', [NotificationController::class, 'index'])->name('home');


    Route::get('/search', [SearchController::class, 'index'])->name('search');
    Route::post('/search', [NotificationController::class, 'store'])->name('search-request');
});





require __DIR__ . '/auth.php';
