using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicDiscAPI.Models
{
    public class Track
    {
      [JsonProperty("trackId")]
      public string Id { get; set; }
      [JsonProperty("name")]
      public string Name { get; set; }
    }
}
