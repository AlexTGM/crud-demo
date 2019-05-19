using TestApplication.Database;

namespace TestApplication.Controllers.Responses.Factories
{
    public static class GoodResponseFactory
    {
        public static GoodResponse Convert(Good payload)
        {
            return new GoodResponse
            {
                Id = payload.Id,
                Description = payload.Description,
                Name = payload.Name,
                InStock = payload.InStock
            };
        }
    }
}