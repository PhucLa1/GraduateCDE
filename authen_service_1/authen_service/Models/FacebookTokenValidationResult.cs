using Newtonsoft.Json;

namespace JWTAuthencation.Models.OtherModels
{
    public  class FacebookTokenValidationResult
    {
        [JsonProperty("data")]
        public required FacebookTokenValidationResultData Data { get; set; }
    }

    public  class FacebookTokenValidationResultData
    {
        [JsonProperty("app_id")]
        public required string AppId { get; set; }

        [JsonProperty("type")]
        public required string Type { get; set; }

        [JsonProperty("application")]
        public required string Application { get; set; }

        [JsonProperty("data_access_expires_at")]
        public long DataAccessExpiresAt { get; set; }

        [JsonProperty("expires_at")]
        public long ExpiresAt { get; set; }

        [JsonProperty("is_valid")]
        public bool IsValid { get; set; }

        [JsonProperty("scopes")]
        public required string[] Scopes { get; set; }

        [JsonProperty("user_id")]
        public required string UserId { get; set; }
    }
}
