<?php

namespace App\Http\Controllers;

use App\Models\MedicalExam;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function show()
    {

        $user = auth()->user();
        $medicalData = MedicalExam::all();
        
        return Inertia::render('TestPage',['user' => $user, 'medicalData' => $medicalData]);
    }
}
