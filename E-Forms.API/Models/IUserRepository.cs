using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace E_Forms.API.Models
{
    public interface IUserRepository
    {
        IEnumerable<UserModel> GetAll();
        UserModel Add(UserModel userModel);     
    }
}
