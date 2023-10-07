<?php

namespace App\Http\Controllers;

use App\Models\MedicalExam;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserController extends Controller
{
    public function show()
    {

        $user = auth()->user();
        $medicalData = MedicalExam::all();

        return Inertia::render('TestPage', ['user' => $user, 'medicalData' => $medicalData]);
    }

    public function edit()
    {

        $user = auth()->user();
        return Inertia::render('ProfileEdit', [
            'user' => $user
        ]);
    }

    public function update(Request $request)
    {
        $user = auth()->user();

        Log::info($request->all());

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'skyway_id' => 'required|string|max:255',
            'role' => 'required|integer',
            'qualification' => 'nullable|string|max:255',
            'qualification_year' => 'nullable|integer',
            'region' => 'nullable|string|max:255',
            'areas' => 'nullable|array',
            'status' => 'required|boolean',
        ]);

        $user->update($data);
        return   Inertia::render('ProfileEdit');
    }
}
