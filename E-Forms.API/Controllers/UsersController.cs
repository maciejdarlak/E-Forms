using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Forms.API.Models;
using System.Net.Http;
using Microsoft.Extensions.Logging;


namespace E_Forms.API.Controllers
{
    [ApiController]
    public class UsersController : ControllerBase // ControllerBase : A base class for an MVC controller without view support
    {
        private readonly ILogger<UsersController> _logger; // ILogger - error recorder
        static readonly IUserRepository repository = new UserRepository(); // Model object - its values can be used from now

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/users")]
        public IEnumerable<UserModel> GetAllUsers()
        {
            return repository.GetAll();
        }

        [HttpPost]
        [Route("api/user")]
        [Consumes("application/json")] // Consumes - it's saying to the framework to use JSON as input format
        public UserModel PostUser(UserModel item)
        {
            return repository.Add(item);
        }
    }
}
