<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetallesMarticulaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalles_marticula', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('curso_id')->unsigned();
            $table->foreign('curso_id')->references('id')->on('cursos');

            $table->float('deberes_1');
            $table->float('grupal_aula_1');
            $table->float('actividad_aula_1');
            $table->float('prueba_1');

            $table->float('deberes_2');
            $table->float('grupal_aula_2');
            $table->float('actividad_aula_2');
            $table->float('prueba_2');

            $table->float('deberes_3');
            $table->float('grupal_aula_3');
            $table->float('actividad_aula_3');
            $table->float('prueba_3');

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
        Schema::dropIfExists('detalles_marticula');
    }
}
