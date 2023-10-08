<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('from_user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('to_user_id')->constrained('users')->onDelete('cascade');
            $table->tinyInteger('status');
            $table->string('message')->nullable();
            $table->timestamps();

            $table->index('from_user_id');
            $table->index('to_user_id');
            $table->index('status');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
