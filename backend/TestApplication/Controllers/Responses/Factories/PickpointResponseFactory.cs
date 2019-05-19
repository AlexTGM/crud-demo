using TestApplication.Database;

namespace TestApplication.Controllers.Responses.Factories
{
    public static class PickpointResponseFactory
    {
        public static PickpointResponse Convert(Pickpoint payload)
        {
            return new PickpointResponse
            {
                Id = payload.Id,
                Address = payload.Address,
                Description = payload.Description,
                Name = payload.Name
            };
        }
    }
}