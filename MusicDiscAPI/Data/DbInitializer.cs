using MusicDiscAPI.Data;
using MusicDiscAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestionApp.Data
{
  public class DbInitializer
  {
    public static void Initialize(DiscoveryContext context)
    {
      context.Database.EnsureCreated();

      if (context.Tracks.Any())
      {
        return;
      }

      context.Tracks.Add(new Track { Name = "TestTrack", Id = "testTrackId" });

      context.SaveChanges();

      context.Artists.AddRange(
         new Artist { Name = "TestArtist", Id = "testArtistId" }
     );

      context.SaveChanges();
    }
  }
}
