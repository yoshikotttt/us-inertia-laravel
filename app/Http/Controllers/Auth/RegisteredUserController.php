<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|integer',
            'qualification' => 'required_if:role,1|string|nullable',
            'qualification_year' => 'required_if:role,1|integer|nullable',
            'region' => 'required_if:role,1|string|nullable',
            'areas' => 'required_if:role,1|array|min:1|max:5|nullable',
            'status' => 'boolean',
        ]);

        do {
            $skywayId = Str::random(16);
            if (!User::where('skyway_id', $skywayId)->exists()) {
                break;
            }
        } while (true);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'skyway_id' => $skywayId,
            'role' => $request->role,
            'qualification' => $request->qualification,
            'qualification_year' => $request->qualification_year,
            'region' => $request->region,
            'areas' => json_encode($request->areas),
            'status' => $request->has('status'),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

}
