<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("avatarSrc");
            $table->string("autor");
            $table->string("reaction");
            $table->string("postTitle")->nullable();
            $table->string("group")->nullable();
            $table->string("message")->nullable();
            $table->string("commentedPicture")->nullable();
            $table->string("data");
            $table->boolean("ifRead");


    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
};
