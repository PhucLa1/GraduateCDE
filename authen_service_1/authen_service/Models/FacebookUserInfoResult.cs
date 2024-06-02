using Newtonsoft.Json;

namespace JWTAuthencation.Models.OtherModels
{
    public  class FacebookUserInfoResult
    {
        [JsonProperty("first_name")]
        public required string FirstName { get; set; }

        [JsonProperty("last_name")]
        public required string LastName { get; set; }

        [JsonProperty("picture")]
        public required FacebookPicture FacebookPicture { get; set; }

        [JsonProperty("email")]
        public required string Email { get; set; }

        [JsonProperty("id")]
        public required string Id { get; set; }
    }

    public  class FacebookPicture
    {
        [JsonProperty("data")]
        public required FacebookPictureData Data { get; set; }
    }

    public  class FacebookPictureData
    {
        [JsonProperty("height")]
        public long Height { get; set; }

        [JsonProperty("is_silhouette")]
        public bool IsSilhouette { get; set; }

        [JsonProperty("url")]
        public required Uri Url { get; set; }

        [JsonProperty("width")]
        public long Width { get; set; }

        public string GetFileNameFromUrl()
        {
            // Tách tên tệp từ URL
            return System.IO.Path.GetFileName(Url.LocalPath);
        }
    }
}
