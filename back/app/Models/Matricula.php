<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\DetalleMatricula;

class Matricula extends Model
{
    use HasFactory;

    protected $table      = 'matriculas';

    protected $fillable = [
        "carrera_id",
        "estudiante_id",
        "fecha_matricula",
        "nivel",
    ];

    protected $dates = [
        "fecha_matricula"
    ];

    public function detalles_matricula()
    {
        return $this->hasMany(DetalleMatricula::class);
    }
}
