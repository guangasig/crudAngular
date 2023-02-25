<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleMatricula extends Model
{
    use HasFactory;
    protected $table = 'detalle_matriculas';

    protected $fillable = [
        'curso_id',

        'deberes_1',
        'grupal_aula_1',
        'actividad_aula_1',
        'prueba_1',

        'deberes_2',
        'grupal_aula_2',
        'actividad_aula_2',
        'prueba_2',

        'deberes_3',
        'grupal_aula_3',
        'actividad_aula_3',
        'prueba_3',
    ];
}
