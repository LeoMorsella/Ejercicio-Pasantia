using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Proyecto_Pasantia.Models
{
    public class Persona
    {
        [Key]
        public int dni { get; set; }

        [Required]
        [Column (TypeName = "varchar(100)")]
        public string nombre { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string apellido { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string libroFavorito { get; set; }


    }
}
