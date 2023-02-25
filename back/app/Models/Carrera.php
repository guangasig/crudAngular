<?php

namespace App\Models;

use App\Models\Curso;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrera extends Model
{
    use HasFactory;

    protected $table = 'carreras';

    protected $fillable = [
        'nombre',
        'estado',
    ];

    /**
     * Devuelve una lista de cursos.
     */
    public function cursos()
    {
        return $this->hasMany(Curso::class);
    }
}
