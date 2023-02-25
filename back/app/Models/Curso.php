<?php

namespace App\Models;

use App\Models\Estudiante;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    protected $table = 'cursos';

    protected $fillable = [
        'nombre',
        'estado',
    ];

    protected $casts = [
        'estado' => 'boolean',
    ];

    /**
     * Devuelve una lista de estudiantes.
     */
    public function estudiantes()
    {
        return $this->hasMany(Estudiante::class);
    }

    /**
     * Devuelve la carrera relacionada al curos.
     */
    public function carrera()
    {
        return $this->belongsTo(Carrera::class);
    }
}
