<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Matricula;

class Estudiante extends Model
{
    use HasFactory;

    protected $table      = 'estudiantes';

    protected $fillable   = [
        'cedula',
        'apellidos',
        'nombres',
        'descripcion',
    ];

    /**
     * Devuelve una lista de matriculas.
     */
    public function matriculas()
    {
      return $this->hasMany(Matricula::class);
    }

}
