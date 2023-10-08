<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request)
    {

        $user = auth()->user();

        $query = $request->input('query');
        $results =User::where('areas', 'like', "%$query%")->get();

        return Inertia::render('SearchDoctorPage', [
            'user' => $user, 'results' => $results
        ]);
    }
}
