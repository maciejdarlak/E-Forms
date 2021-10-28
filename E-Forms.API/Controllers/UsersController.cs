using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Forms.API.Models;
using System.Net.Http;
using Microsoft.Extensions.Logging;
using E_Forms.DataBase.Contexts;
using E_Forms.API.Repositories;

namespace E_Forms.API.Controllers
{
    [ApiController]
    public class UsersController : ControllerBase // ControllerBase : A base class for an MVC controller without view support
    {
        private UserDbContext _userDbContext;
        static readonly IUserRepository repository = new UserRepository(); // Model object - its values can be used from now

        public UsersController(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }

        [HttpGet]
        [Route("api/users")]
        public IEnumerable<UserModel> GetAllUsers()
        {
            return repository.GetAll();
            // return _userDbContext.Users.Select(x => new UserModel() { lastName = x.lastName, firstName = x.firstName }).ToList();
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
