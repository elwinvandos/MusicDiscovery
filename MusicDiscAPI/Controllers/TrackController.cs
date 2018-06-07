using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MusicDiscAPI.Data;
using MusicDiscAPI.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicDiscAPI.Controllers
{
    public class TrackController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        private readonly DiscoveryContext _context;

        public TrackController(DiscoveryContext context)
        {
            _context = context;
        }

        [Route("api/newTrack")]
        [HttpPost]
        public void addNewtrack([FromBody]Track t)
        {      
          _context.Tracks.Add(t);
          _context.SaveChanges();
        }

        [Route("/api/tracks/{TrackId}")]
        [HttpGet]
        public IEnumerable<Track> GetSpecificTrack(string TrackId)
        {
          return _context.Tracks.Where(t => t.Id == TrackId).ToList();
        }

        [Route("/api/tracks")]
        [HttpGet]
        public IEnumerable<Track> GetAllTracks()
        {
          return _context.Tracks.ToList();
        }
  }
}
