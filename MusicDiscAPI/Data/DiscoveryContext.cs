using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MusicDiscAPI.Models;

namespace MusicDiscAPI.Data
{
    public class DiscoveryContext : IdentityDbContext<AppUser>
    {
        public DiscoveryContext(DbContextOptions<DiscoveryContext> options) : base(options)
        {
        
        }

        public DbSet<Artist> Artists { get; set; }
        public DbSet<Track> Tracks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          base.OnModelCreating(modelBuilder);
          modelBuilder.Entity<Artist>().ToTable("Artist");
          modelBuilder.Entity<Track>().ToTable("Track");
        }
    }
}
