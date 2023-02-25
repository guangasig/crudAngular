<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatriculasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matriculas', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('carrera_id')->unsigned()->index();
            $table->foreign('carrera_id')->references('id')->on('carreras');

            $table->bigInteger('estudiante_id')->unsigned()->index();
            $table->foreign('estudiante_id')->references('id')->on('estudiantes');

            $table->dateTime('fecha_matricula');
            $table->enum('nivel', ['8vo', '9no', '10mo', '1bgu', '2bgu', '3bgu']);

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matriculas');
    }
}
