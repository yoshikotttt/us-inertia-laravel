<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    // 通知の作成
    public function store(Request $request)
    {
        $request->validate([
            'selected_result' => 'required|exists:users,id', // 選択した受諾医のIDがusersテーブルに存在することを確認
        ]);

        // 通知をデータベースに保存
        Notification::create([
            'from_user_id' => auth()->id(),  // ログイン中のユーザーID
            'to_user_id' => $request->selected_result,  // 選択した受諾医のID
            'status' => 0,
            'message' => $request->message ?? null,
        ]);

        return redirect()->route('home')->with('success', '依頼が送信されました！');
    }

    // 特定のユーザー宛の通知を表示
    public function index()
    {
        $notifications = Notification::where('to_user_id', auth()->id())->latest()->get();
        $user = auth()->user();
        // $view = $user->role == 0 ? 'RequestHome' : 'AcceptHome'; // 0: 依頼者, 1: 受諾者 に応じたコンポーネントを選択

        return Inertia::render('HomePage', [
            'notifications' => $notifications,
            'user' => $user->only(['id', 'name', 'email', 'role'])
        ]);
    }

}
