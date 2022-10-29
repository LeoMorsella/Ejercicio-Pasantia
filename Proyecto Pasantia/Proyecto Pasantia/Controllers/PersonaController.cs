using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto_Pasantia;
using Proyecto_Pasantia.Models;

namespace Proyecto_Pasantia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public PersonaController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Persona
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Persona>>> Getpersona()
        {
            return await _context.persona.ToListAsync();
        }

        [HttpGet("GetFanDragonRojo")]
        public async Task<ActionResult<IEnumerable<Persona>>> GetFanDragonRojo()
        {
            var personas = await _context.persona.ToListAsync();
            var personasConNombre = personas.ToArray().Where(p => p.libroFavorito == "Dragon Rojo").ToList();
            return personasConNombre;
        }

        [HttpGet("GetFanJojo")]
        public async Task<ActionResult<IEnumerable<Persona>>> GetFanJojo()
        {
            var personas = await _context.persona.ToListAsync();
            var personasConNombre = personas.ToArray().Where(p => p.libroFavorito == "Jojo").ToList();
            return personasConNombre;
        }

        // GET: api/Persona/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Persona>> GetPersona(int id)
        {
            var persona = await _context.persona.FindAsync(id);

            if (persona == null)
            {
                return NotFound();
            }

            return persona;
        }

        // PUT: api/Persona/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersona(int id, Persona persona)
        {
            if (id != persona.dni)
            {
                return BadRequest();
            }

            _context.Entry(persona).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Persona
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Persona>> PostPersona(Persona persona)
        {
            _context.persona.Add(persona);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersona", new { id = persona.dni }, persona);
        }

        // DELETE: api/Persona/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Persona>> DeletePersona(int id)
        {
            var persona = await _context.persona.FindAsync(id);
            if (persona == null)
            {
                return NotFound();
            }

            _context.persona.Remove(persona);
            await _context.SaveChangesAsync();

            return persona;
        }

        private bool PersonaExists(int id)
        {
            return _context.persona.Any(e => e.dni == id);
        }
    }
}
 